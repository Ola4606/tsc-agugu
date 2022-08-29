import React from 'react'

type HomeSectionPropType = {
  title: string,
  content: any,
  image: any
}

function HomeSection({title, content, image}: HomeSectionPropType) {
  return (
    <div className="flex justify-center items-center mt-16 md:mt-24">
    <div className="min-h-[200px] xsm:max-w-[390px] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[850px] xl:max-w-[950px] flex flex-col justify-center items-center text-center">
      <p className="font-bold font-title text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black underline underline-offset-4 decoration-gray-300 text-end">
       {title}
      </p>
      <div className="font-casual text-base md:text-lg lg:text-xl mt-4 md:mt-8">
        {content}
      </div>

      <div className="xsm:max-w-[390px] sm:max-w-[550px] md:max-w-[650px] lg:max-w-[650px] xl:max-w-[750px] mt-12 md:mt-16">
        <img src={image} alt="" className="w-full h-auto rounded-xl" />
      </div>
    </div>
  </div>
  )
}

export default HomeSection