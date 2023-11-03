import HomeArticleCard from '@/components/HomeArticleCard'
import React from 'react'
import RentImage from '@/public/images/home/rent.webp'
import ShopImage from '@/public/images/home/shop.jpg'
import RepairImage from '@/public/images/home/repair.jpg'
import ImageCard from '@/components/ImageCard'
import IconCorpName from '@/components/svg/IconCorpName'
import PageContainer from '@/components/layouts/site/PageContainer'
import { headers } from 'next/headers'
import { getAppBikesConfig } from '@/lib/pg-promise/crud/bikes'

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
export default async function HomePage() {
   //TODO: ajusta responsive
   //TODO: que es esto de referer?
   const headersList = headers()
   const referer = headersList.get('referer')
   console.log('referer ->', referer)
   const res = await getAppBikesConfig()
   const params = await res.json()
   console.log('params IN HOME PAGE@-> ', params)
   return (
      <>
         <div className="min-h-slimBarScreen md:min-h-fatBarScreen  w-full bg-home-main bg-cover bg-fixed bg-[70%] bg-no-repeat pt-slimTopAppBar md:pt-fatTopAppBar min-[900px]:bg-center">
            <div className=" flex h-full items-center	 justify-center backdrop-brightness-75">
               <IconCorpName
                  className={
                     'h-[calc(100vh-64px)]  w-full max-w-[1000px] fill-[#D5FF40] stroke-white '
                  }
                  viewBox={'0 0 654 97'}
               />
            </div>
         </div>
         <PageContainer>
            <div className="HomePage  px-8 lg:px-8">
               <div className="mt-16 grid  auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                  {cards.map((card, idx) => (
                     <ImageCard key={idx} {...card} />
                  ))}
               </div>
            </div>
         </PageContainer>
      </>
   )
}
