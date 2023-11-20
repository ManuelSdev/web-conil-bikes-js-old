import mail from '@sendgrid/mail'
import basicEmailTemplate from '@/lib/emailTemplates/basicTemplate'

const sendGridSendEmail = async ({ userName, buttonLink, to }) => {
   mail.setApiKey(process.env.SENDGRID_API_KEY)
   const mailTemplateConfig = {
      userName,
      firstMessage:
         'Haz click en el botón para verificar tu email y finalizar el registro',
      buttonText: 'Verificar email',
      buttonLink,
   }

   const emailHtml = basicEmailTemplate(mailTemplateConfig)
   //console.log('emailHtml -> ', emailHtml)
   // const html = emailTemplate('linkToControlPage')
   try {
      const msg = {
         to, // Change to your recipient
         // Change to your verified sender
         from: 'masanchezzm@gmail.com',
         subject: 'BIenvenido a Conil Bikes',
         // text: 'Verifica tu email para finalizar el registro',
         html: emailHtml,
      }
      const sendgridResponse = await mail.send(msg)
      return sendgridResponse
   } catch (error) {
      const {
         response: { body: errors },
      } = error
      console.log('### ERROR sendgridResponse API route -> ', errors)
      throw new Error(errors)
   }
}

export default sendGridSendEmail
