import mail from '@sendgrid/mail'
import basicEmailTemplate from '@/lib/emailTemplates/basicTemplate'
import getOrderResumeEmail from './templates/orderResume'

const sendGridSendConfirmationBookingEmail = async (bookingData) => {
   mail.setApiKey(process.env.SENDGRID_API_KEY)

   const emailHtml = getOrderResumeEmail(bookingData)
   //console.log('emailHtml -> ', emailHtml)
   // const html = emailTemplate('linkToControlPage')
   try {
      const msg = {
         to: bookingData.email, // Change to your recipient
         // Change to your verified sender
         from: 'masanchezzm@gmail.com',
         subject: 'Bienvenido a Conil Bikes',
         // text: 'Verifica tu email para finalizar el registro',
         html: emailHtml,
      }
      const sendgridResponse = await mail.send(msg)
      return sendgridResponse
   } catch (error) {
      const {
         response: { body: errors },
      } = error
      //console.log('### ERROR sendgridResponse API route -> ', errors)
      throw error
   }
}

export default sendGridSendConfirmationBookingEmail
