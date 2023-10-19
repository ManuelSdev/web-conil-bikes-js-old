import HomeArticleCard from '@/components/HomeArticleCard'
import React from 'react'
import RentImage from '../../../public/images/home/rent.webp'
import ShopImage from '../../../public/images/home/shop.jpg'
import RepairImage from '../../../public/images/home/repair.jpg'
import ImageCard from '@/components/ImageCard'
const cards = [
   {
      src: RentImage,
      label: (
         <span>
            ALQUILER DE <br /> BICICLETAS
         </span>
      ),
      //  title: 'Alquiler de bicicletas',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vitae ipsum eget tempus. Phasellus interdum id massa non bibendum. Curabitur auctor cursus dignissim.',
   },
   {
      src: ShopImage,
      label: (
         <span>
            VENTA DE
            <br />
            BICICLETAS Y<br /> ACCESORIOS
         </span>
      ),
      // title: 'Venta de bicicletas y accesorios',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vitae ipsum eget tempus. Phasellus interdum id massa non bibendum. Curabitur auctor cursus dignissim.',
   },
   {
      src: RepairImage,
      label: (
         <span>
            {' '}
            REPARACION Y
            <br />
            MANTENIMIENTO
         </span>
      ),
      //   title: 'Reparación y mantenimiento',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed condimentum vitae ipsum eget tempus. Phasellus interdum id massa non bibendum. Curabitur auctor cursus dignissim.',
   },
]
export default function HomePage() {
   //TODO: ajusta responsive
   return (
      <div className="HomePage bg-white px-8 lg:px-8">
         <div className="mt-16 grid  auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {cards.map((card) => (
               <ImageCard {...card} />
            ))}
         </div>
      </div>
   )
}
