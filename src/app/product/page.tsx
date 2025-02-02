import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import React from 'react';

const productList = [
    {
      id: 1,
      name: "Vel elit euismod",
      image: "/images/image-9.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 2,
      name: "Ultricies condimentum imperdiet",
      image: "/images/productimage-2.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 3,
      name: "Vitae suspendisse sed",
      image: "/images/productimage-3.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 4,
      name: "Sed at fermentum",
      image: "/images/productimage-4.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 5,
      name: "Fusce pellentesque at",
      image: "/images/productimage-5.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, {
      id: 6,
      name: "Vestibulum magna laoreet",
      image: "/images/productimage-6.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    }, 
    {
      id: 7,
      name: "Sollicitudin amet orci",
      image: "/images/productimage-7.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 8,
      name: "Ultrices mauris sit",
      image: "/images/productimage-8.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 9,
      name: "Pellentesque condimentum ac",
      image: "/images/productimage-9.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 10,
      name: "Cras scelerisque velit",
      image: "/images/productimage-10.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 11,
      name: "Lectus vulputate faucibus",
      image: "/images/productimage-11.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
    {
      id: 12,
      name: "Purus risus, ut",
      image: "/images/productimage-4.png",
      price: "$26.00",
      oldPrice: "$42.00",
      colors: ["bg-[#DE9034]", "bg-[#FB2E86]", "bg-[#5E37FF]"]
    },
  ];

  
  const product = () => {
      return (
          <>
              <Header />
              <div className="font-sans text-[#151875]">
                  {/* Header Section */}
                  <div className="py-28 px-8">
                      <h1 className="text-4xl font-bold">Shop Grid Default</h1>
                      <div className="flex items-center gap-2">
                          <Link href={"/"}>Home</Link>
                          <p>Pages</p>
                          <p className="text-[#FB2E86]">Shop Grid default</p>
                      </div>
                  </div>
  
                  {/* Filter and Sorting Section */}
                  <div className="py-4 flex flex-col lg:flex-row justify-between px-8">
                      <div>
                          <h1 className="text-2xl font-semibold font-[Josefin Sans] mb-2">
                              Ecommerce Accessories & Fashion Items
                          </h1>
                          <p className="text-sm text-gray-500 mb-4">
                              About 9,620 results (0.62 seconds)
                          </p>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                          {/* Per Page */}
                          <div className="flex items-center gap-2">
                              <label
                                  htmlFor="perPage"
                                  className="text-sm font-medium text-gray-700"
                              >
                                  Per Page:
                              </label>
                              <input
                                  type="text"
                                  id="perPage"
                                  className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
                              />
                          </div>
  
                          {/* Sort By */}
                          <div className="flex items-center gap-2">
                              <label
                                  htmlFor="sortBy"
                                  className="text-sm font-medium text-gray-700"
                              >
                                  Sort By:
                              </label>
                              <select
                                  id="sortBy"
                                  className="p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
                              >
                                  <option value="bestMatch">Best Match</option>
                                  <option value="priceLowHigh">Price: Low to High</option>
                                  <option value="priceHighLow">Price: High to Low</option>
                              </select>
                          </div>
  
                          {/* View */}
                          <div className="flex items-center gap-2">
                              <label htmlFor="view" className="text-sm font-medium focus:outline-none focus:ring-1 focus:ring-[#FB2E86]">
                                  View:
                              </label>
                              <input
                                  type="text"
                                  id="view"
                                  className="w-16 p-1 border rounded text-sm focus:outline-none focus:ring-1 focus:ring-[#FB2E86]"
                              />
                          </div>
                      </div>
                  </div>
  
                    {/* Product Grid */}
                <div className="w-full max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {productList.map((product) => (
                        <div key={product.id} className="relative group bg-white shadow-md rounded-lg p-4">
                            {/* Product Image with Icons */}
                            <div className="w-full bg-gray-200 flex justify-center items-center relative overflow-hidden h-[200px]">
                                {/* Product Image */}
                                <Image
                                    src={product.image}
                                    width={200}
                                    height={200}
                                    alt={product.name}
                                    className="object-cover w-full h-full transition-all duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <h2 className="text-lg font-medium">{product.name}</h2>
                                <div className="flex justify-center items-center gap-2 mt-2">
                                    {product.colors.map((color, index) => (
                                        <span key={index} className={`w-4 h-4 rounded-full ${color}`}></span>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center gap-2 mt-2">
                                    <span className="text-[#FB2E86] font-bold">{product.price}</span>
                                    <span className="line-through text-gray-500">{product.oldPrice}</span>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};
  
  export default product;
  