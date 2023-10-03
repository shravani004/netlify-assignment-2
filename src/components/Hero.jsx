import React from 'react'

const Hero = () => {
  return (
    <div class="grid grid-cols-5 gap-3 mb-5">
      <div></div>
      <span class="col-span-2">
        <img class="h-20 w-full rounded object-cover" src="/img/image5.jpg" alt="Ad"/>
      </span>
      <div>
        <img class="w-full h-10 object-cover rounded-md" src="/img/image4.jpg" alt="ad-2" />
      </div>
    </div>
    
  )
}

export default Hero