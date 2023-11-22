export const signInErrorHandler = (code) => {
   switch (code) {
      case 'auth/invalid-email':
         return {
            title: 'La direccion de correo electrónico no es valida',
            description: '',
         }
         break
      case 'auth/user-disabled':
         return { title: 'El usuario ha sido deshabilitado', description: '' }
         break

      case 'auth/user-not-found':
         return { title: 'No se encontró al usuario', description: '' }
         break
      case 'auth/wrong-password':
         return { title: 'Contraseña no válida', description: '' }
         break
      case 'custom/unverified':
         return {
            title: 'Cuenta no verificada',
            description:
               'Pulsa aceptar para que te enviemos un nuevo email de verificación',
         }
         break
      default:
         return 'No es posible iniciar sesión en este momento'
   }
}

export const signUpErrorHandler = (code) => {
   console.log('code en signUpErrorHandler -> ', code)
   switch (code) {
      case 'auth/email-already-exists':
         return 'Ya existe una cuenta con el email proporcionado'

      case 'auth/phone-number-already-exists':
         return 'Ya existe una cuenta con el teléfono proporcionado'

      default:
         return 'No es posible crear una cuenta en este momento'
   }
}
