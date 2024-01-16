import React from 'react'

export default function StepperControlButtons({
   renderNextButton,
   renderPrevButton,
   className,
}) {
   const buttonsClassname = 'min-w-[100px] text-greenCorp'
   return (
      <nav className={className}>
         <div className="BUTTONS flex w-full items-center justify-center gap-5">
            {renderPrevButton && renderPrevButton(buttonsClassname)}
            {renderNextButton && renderNextButton(buttonsClassname)}
         </div>
      </nav>
   )
}
