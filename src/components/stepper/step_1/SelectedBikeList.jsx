import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SelectedBikeList({
   dateRange,
   selectedBikes,
   setSubStep,
}) {
   return (
      <div>
         <div>LISTA DE BICIS SELECCIONADAS</div>
         <Button onClick={() => setSubStep(1)}>Añadir bicicletas</Button>
      </div>
   )
}
