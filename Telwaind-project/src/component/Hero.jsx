import React from 'react'

const Hero = () => {
  return (
    <>
    
    <section className="text-black bg-red-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
      <img className="object-cover object-center rounded" alt="hero" src="https://acom.pk/cdn/shop/articles/laptops_1200x.png?v=1647261846"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black"> Tech World
        {/* <br className="hidden lg:inline-block"/> */}
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to our digital emporium, where innovation meets convenience, and technology becomes accessible to all. Embark on a journey through a realm of cutting-edge computer products designed to elevate your digital experiences. Whether you're a seasoned tech enthusiast or a newcomer to the digital landscape, our curated selection caters to all your needs, from powerful processors to sleek peripherals. Explore our virtual aisles and unlock the possibilities of tomorrow, today. Welcome to a world where the future is at your fingertips.</p>
<div className="flex justify-center">
</div>

    </div>
  </div>
</section>

    </>
  )
}

export default Hero