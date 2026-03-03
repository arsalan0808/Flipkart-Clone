import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home({ getRandomOriginalPriceOfThreeDigits}) {
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    let res = await axios.get("https://fakestoreapi.com/products");

    setProducts(res.data);
    setLoader(false);
    // console.log(res.data);
  }
  // console.log(products.sort((a,b) => a.price - b.price ));

  function handleSortPrice(price) {
    if (price === "asc") {
      setProducts([...products].sort((a, b) => a.price - b.price));
    } else {
      setProducts([...products].sort((a, b) => b.price - a.price));
    }
  }

  function handleSortTitle(order) {
    if (order === "asc") {
      setProducts([...products].sort((a, b) => a.title.localeCompare(b.title)));
    } else {
      setProducts([...products].sort((a, b) => b.title.localeCompare(a.title)));
    }
  }
  function getRandomDiscount() {
    return Math.floor(Math.random() * 50) + 10; // Random discount between 10% and 60%
  }

   
  if (loader) {
    return (
      // make this loader width full screen and height full screen and center the loader in the middle of the screen

    <div
  className=" p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400 w-full "
>
  <div
    className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400"
  >
    <svg
      viewBox="0 0 16 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-10 h-10 text-gray-200 dark:text-gray-600"
    >
      <path
        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57A3.987,3.987,0,0,1,9,8h2a3.987,3.987,0,0,1,3.95,3.5l-.44,4Z"
      ></path>
      <path
        d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
      ></path>
    </svg>
  </div>
  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
  <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
  <div className="flex items-center mt-4">
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-10 h-10 me-3 text-gray-200 dark:text-gray-400"
    >
      <path
        d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987,3.987,0,0,1,3.95,3.5l-.44,4Z"
      ></path>
    </svg>
    <div>
      <div
        className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"
      ></div>
      <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
    </div>
  </div>
  <span className="sr-only">Loading...</span>
</div>

    );
  }

  return (
    // styling throuigh tailwind css in flipkart style

    <div className="container mx-auto p-4">
      <div>
        {/* main sort container */}
        <div className="flex justify-end items-center mb-4 bg-gray-100 p-4 rounded-md">
          <div>
            {/* DropDown Styling */}
            <label className="font-semibold">Sort By Price : </label>
            <select
              className="ml-2 border border-gray-300 rounded-md p-1"
              onChange={(e) => handleSortPrice(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Sort By Order : </label>
            <select
              className="ml-2 border border-gray-300 rounded-md p-1"
              onChange={(e) => handleSortTitle(e.target.value)}
            >
              <option value="asc">A to Z</option>
              <option value="desc">Z to A</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          {products.map((product) => (
            <Link className="block mb-4" to={`/singleproduct/${product.id}`}>
              <div className=" h-full w-80 border border-gray-300  shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center ">
                {/* flipkart product top left heart icon */}
                <div className="w-full flex justify-end">
                  <img
                    src="/hearts.png"
                    alt="wishlist"
                    className="w-5 h-5 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  />
                </div>
                <img
                  className="w-full h-64 object-contain mb-2"
                  src={product.image}
                  alt={product.title}
                />
                <p className="font-light sm:text-xs text-gray-600">Sponsored</p>
                <p className="font-semibold sm:text-xs">
                  Name : {product.title}
                </p>
                <p className=" font-semibold sm:text-xs">
                  {" "}
                  Original Price :{" "}
                  <span className="font-normal inline text-gray-700 line-through">
                    $ {getRandomOriginalPriceOfThreeDigits()}
                  </span>
                </p>
                <p className="text-green-600 font-bold">
                  {" "}
                  Price : $ {product.price}
                </p>
                <div className="text-green-500 font-sans inline">
                  {getRandomDiscount()}% Off
                  <p className="text-blue-800 inline  italic font-bold text-sm">
                    <img
                      src="icons8-flipkart-100.png"
                      alt="assured"
                      className="w-7 h-7 inline ml-1"
                    />
                    Assured
                  </p>
                </div>
                {/* hot deal button of flipkart style lime like and text green */}

                <button className="bg-green-100 text-green-500 font-bold py-1 px-2 rounded mt-2 transition-colors duration-300 text-xs">
                  Hot Deal
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
