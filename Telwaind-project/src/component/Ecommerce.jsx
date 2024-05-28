import React from 'react'

const Ecommerce = () => {


   const opacColor ={backgroundColor: 'rgba(240, 240, 240, 0.1)'}
  return (
   <>
   
  
<section  className="bg-red-300 text-black body-font">
<div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://static-01.daraz.pk/p/ad53ce604e9e64a60df0001f9372c552.jpg_750x750.jpg_.webp"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Hp Chromebook 11 G6 EE</h3>
                    <p className="text-gray-600">$99.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://img-cdn.tnwcdn.com/image?height=675&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2013%2F11%2FAcer-Chromebook-previewed-at-IDF-rear-view-angled.jpg&width=1200&signature=855c5b08c1199cf9d30fa066185c152a"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Acer C720 ChromeBook Laptop</h3>
                    <p className="text-gray-600">$79.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://static-01.daraz.pk/p/fac0756c7ad4472d7a281dca16f5f108.jpg_300x0q75.webp"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Acer C740 ChromeBook Laptop</h3>
                    <p className="text-gray-600">$129.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
            
            <div className="shadow-md rounded-lg overflow-hidden" style={opacColor}>
                <img src="https://static-01.daraz.pk/p/81004935e407a007f6af08411850c57f.jpg_300x0q75.webp" alt="Acer Chromebook C740" className="w-full h-64 object-cover object-center"/>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">Acer Chromebook C740</h3>
                    <p className="text-gray-600">$149.99</p>
                    <button className="mt-4 bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</section>
    



   
   </>
  )
}

export default Ecommerce