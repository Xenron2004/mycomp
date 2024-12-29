// import React from 'react'


// const Bg = () => {
//   return (
//     <div className='flex max-w-[1280px] mt-8  pt-2 w-11/12 items-start justify-center text-mainBodytext text-[14px] font-inter font-normal '>
//     © Reevij Solutions 2025. All Rights Reserved.
//     </div>
//   )
// }

// export default Bg

import React from 'react'


const Bg = () => {
  return (
    <div className='flex max-w-[1280px] mt-8  pt-2 w-full items-start justify-between text-mainBodytext text-sm font-inter font-medium '>
     <div>
        © Reevij Solutions 2025. All Rights Reserved.
     </div>
     <div className='flex gap-4 items-center justify-between'>
         <a href="/privacy-policy" className="text-mainBodytext  text-sm font-inter font-medium  ">Privacy Policy </a>
         <a href="/sitemap" className="text-mainBodytext  text-sm font-inter font-medium  ">Sitemap</a>
         
     </div>
    </div>
  )
}

export default Bg



// © Reevij Solutions 2025. All Rights Reserved.