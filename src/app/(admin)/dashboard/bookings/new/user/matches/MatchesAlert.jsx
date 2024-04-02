'use client'
import useMatchingUsers from '@/hooks/useMatchingUsers'
import React from 'react'
import { AdviceAlert } from '@/components/AdviceAlert'
import { ErrorAlert } from '@/components/ErrorAlert'

export default function MatchesAlert({ searchParams }) {
   console.log('History.state before pushState: ', history.state)
   deleteUrl('http://localhost:3000/dashboard/bookings/new/user')
   const { phone, email } = searchParams
   const {
      users,
      isLoading,
      isSuccess,
      refetch,
      isFetching,
      originalArgs,
      alerts,
      checkedUsers,
   } = useMatchingUsers({ phone, email })

   return (
      <div>
         {alerts?.emailAlert && (
            <ErrorAlert
               className="mt-4"
               title={'Error'}
               description={<EmailAlertDescription email={email} />}
            />
         )}
         {alerts?.phoneAlert && (
            <ErrorAlert
               className="mt-4"
               title={'Advertencia'}
               description={<PhoneAlertDescription phone={phone} />}
            />
         )}
         {alerts && (
            <AdviceAlert
               className="mt-4"
               title={'Ten en cuenta'}
               description={
                  'Puedes crear un nuevo usuario teniendo en cuenta la información mostrada arriba. En caso de que el usuario ya exista, puedes crear la reserva haciendo click en el botón "Crear reserva" de un usuario de la siguiente lista'
               }
            />
         )}
      </div>
   )
}
function PhoneAlertDescription({ phone }) {
   return (
      <div>
         <p>El teléfono {phone} ya está registrado en uno o más usuarios.</p>
         <p>
            Puedes asignar este número de teléfono a un nuevo usuario, pero se
            recomienda que verifiques con el cliente que no se trata de un error
            o que el cliente no haya creado una cuenta previamente.
         </p>
      </div>
   )
}

function EmailAlertDescription({ email }) {
   return (
      <div>
         <p>El email {email} ya está registrado.</p>
         <p>
            El correo electrónico es un identificador único de cliente y solo
            puede estar asignado a un único usuario. Se recomienda que
            verifiques con el cliente que no se trata de un error o que el
            cliente no haya creado una cuenta previamente.
         </p>
      </div>
   )
}

async function deleteUrl(url) {
   await browser.history.deleteUrl({ url: url })
}
