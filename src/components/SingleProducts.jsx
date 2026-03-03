import React, { useEffect, useState } from "react";
import axios from "axios";
import "./SingleProduct.css";
import { redirect, useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function SingleProducts({getRandomOriginalPriceOfThreeDigits}) {
  
    let { id } = useParams();
    const navigate = useNavigate();
    
  const [singleProduct, setSingleProduct] = useState({});
  const [whenDataCOme, setwhenDataCOme] = useState(false);
   const [loader, setLoader] = useState(true);

  useEffect(() => {
    getSingleProduct();
  }, [id]);

  async function getSingleProduct() {
    let res = await axios.get("https://fakestoreapi.com/products/" + id);

    setSingleProduct(res.data);
    setwhenDataCOme(true);
    setLoader(false);
  }

  function getRating(rating) {
    let starCount = [];
    for (var i = 0; i < Math.round(rating); i++) {
      starCount.push(<i className="fa-solid fa-star text-green-700"></i>);
    }

    while (i < 5) {
      starCount.push(<i className="fa-solid fa-star text-gray-300"></i>);
      i++;
    }

    return starCount;
  }
   function getRandomDiscount() {
  return Math.floor(Math.random() * 50) + 10; // Random discount between 10% and 60%
}

function buynow() { 
  navigate("/orderplaced");
  
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
// styling through tailwind css in flipkart style
// make it responsive for mobile and desktop view


    <div className="container mx-auto p-4 sm:p-6 md:p-8">
    
      {whenDataCOme && (
        <>
        <div  className="border border-gray-300  shadow-lg p-4 flex h-full w-full gap-4 flex-col sm:flex-row items-center justify-center">
         
            <img  src={singleProduct.image} className="w-40 h-40 object-fit sm:w-80 sm:h-80 sm: object-fit" />
        
          <div className=" flex flex-col gap-2 items-start justify-start">
            <p className=" font-semibold sm:text-xs "> ID : <p className="font-normal inline"> {singleProduct.id}</p></p>
            <p className=" font-semibold sm:text-xs"> Name : <p className="font-normal inline"> {singleProduct.title}</p></p>
            <p className=" font-semibold sm:text-xs"> Description : <p className="font-normal inline"> {singleProduct.description}</p></p>
          <p className=" font-semibold sm:text-xs"> Original Price : <p className="font-normal inline text-gray-700 line-through">$ {getRandomOriginalPriceOfThreeDigits()}</p></p>  
            <p className=" font-semibold sm:text-xs"> Price : <p className="font-normal inline">$ {singleProduct.price}</p></p>
             <div className="text-green-500 font-sans inline">{getRandomDiscount()}% Off<p className="text-blue-800 inline  italic font-bold text-sm"><img src="/public/icons8-flipkart-100.png"  className="w-7 h-7 inline ml-1" alt="abc"/>Assured</p></div>
            <Link to={`/productbycat/${singleProduct.category}`}>
              <p className=" font-semibold sm:text-xs">Category : <p className="font-normal inline"> {singleProduct.category} <p className=" underline text-green-600">Click here to view similar products</p></p></p>
            </Link>
            <p className=" font-semibold sm:text-xs">Rating : <p className="font-normal inline"> {getRating(singleProduct.rating.rate)}</p></p>
            {/* button flipkart syling buy Now */}
            <div className="flex gap-4">
            <button onClick={buynow} className="bg-green-600 text-white font-bold py-2 px-4 rounded mt-4 hover:bg-green-700 transition-colors duration-300 w-32">Buy Now</button>
          </div>
          </div>
        </div>
         
    </>  )}
    
     <div className="mt-4">
      <p className="text-blue-800 inline  italic font-bold text-sm"> Flipkart<img src="/public/icons8-flipkart-100.png"  className="w-7 h-7 inline ml-1" alt="abc"/> Assured</p>    
      </div>
    </div>
    
  );
}
