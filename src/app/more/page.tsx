import React from 'react'

const page = () => {
  return (
    <div>
         <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
          <source src={`/assets/modelY.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

    </div>
  )
}

export default page