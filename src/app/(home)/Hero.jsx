import IconCorpName from '@/components/svg/IconCorpName'
import React from 'react'

export default function Hero() {
   return (
      <div className="min-h-slimBarScreen md:min-h-fatBarScreen  w-full bg-home-main bg-cover bg-fixed bg-[70%] bg-no-repeat pt-slimTopAppBar md:pt-fatTopAppBar min-[900px]:bg-center">
         {/* <TestClientFireAuth />*/}
         <div className=" flex h-full items-center	 justify-center backdrop-brightness-75">
            <IconCorpName
               className={
                  'h-[calc(100vh-64px)]  w-full max-w-[1000px] fill-[#D5FF40] stroke-white '
               }
               viewBox={'0 0 654 97'}
            />
         </div>
      </div>
   )
}
