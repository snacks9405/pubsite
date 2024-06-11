import React from 'react'

const Hero = ({ title = "Alex",
  subtitle = "Fresh graduate of Computer Science.",
  img = "https://i.ibb.co/khv65J5/demo.webp" }) => {
  return (
    <section className="bg-5 py-36 mb-4">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col "
        >
          <div className="">
            <h1
              className="text-4xl font-extrabold sm:text-5xl md:text-6xl"
            >
              {title}
            </h1>
            <p className="my-4 text-xl ">
              {subtitle}
            </p>
          </div>

        </div>
        <div>
          <img src={img}
               className="h-72"/>
        </div>
      </div>
    </section>
  )
}

export default Hero