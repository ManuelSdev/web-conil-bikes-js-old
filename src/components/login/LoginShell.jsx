import IconCorpLogo from '../svg/IconCorpLogo'

export default function LoginShell({ children }) {
   return (
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
         <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <IconCorpLogo className={'h-[200px] w-[200px] '} />
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
               Inicia sesión en tu cuenta
            </h2>
         </div>

         {children}
      </div>
   )
}
