// Componente React para la bicicleta
const Bicicleta = () => {
   return (
      <div className="flex items-center justify-center space-x-4">
         {/* Ruedas de la bicicleta */}
         <div className="h-16 w-16 rounded-full border-4 border-gray-900 bg-gray-800"></div>

         {/* Cuerpo de la bicicleta */}
         <div className="h-1 w-32 bg-black"></div>

         {/* Asiento de la bicicleta */}
         <div className="h-2 w-10 bg-gray-700"></div>

         {/* Manubrio de la bicicleta */}
         <div className="h-2 w-8 bg-gray-700"></div>

         {/* Ruedas de la bicicleta */}
         <div className="h-16 w-16 rounded-full border-4 border-gray-900 bg-gray-800"></div>
      </div>
   )
}

export default Bicicleta
