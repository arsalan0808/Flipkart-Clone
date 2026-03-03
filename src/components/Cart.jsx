import axios from "axios";
import Footer from "./Footer";
import React, { useEffect, useState } from "react";
 
export default function Cart() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
   const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (cart.length > 0 && products.length > 0) {
      getTotalAmount();
    }
  }, [cart, products]);

  useEffect(() => {
    getCart();
  }, []);

  async function getCart() {
    let res = await axios.get("https://fakestoreapi.com/carts/user/1");
    setCart(res.data);
    setLoader(false);

    let response = await axios.get("https://fakestoreapi.com/products");
    setProducts(response.data);
    setLoader(false);
  }

 function getProductImage(id) {
    let productsDetails = products.find((product) => {
      return product.id == id;
    });
    return productsDetails.image;
  }

  function getProductName(id) {
    let productsDetails = products.find((product) => {
      return product.id == id;
    });
    return productsDetails.title;
  }

 

  function getProductPrice(id) {
    let productsDetails = products.find((product) => {
      return product.id == id;
    });
    return productsDetails.price;
  }

  function getProductTotal(id, quantity) {
    let productsDetails = products.find((product) => {
      return product.id == id;
    });
    return productsDetails.price * quantity;
  }

  function getTotalAmount() {
    let total = 0;

    cart[0].products.forEach((item) => {
      let myTotalAmount = getProductTotal(item.productId, item.quantity);
      total = total + myTotalAmount;
    });
    setTotalAmount(total);
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
    // instead of table we will use div and css flexbox to style the cart page in flipkart style


    <div className="container mx-auto  overflow-x-hidden p-4">
        {cart.length > 0  && products.length > 0 &&
      <div className="w-full border-collapse border border-gray-300 text-left  md:text-sm text-xs">
        
          <div className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal flex items-center border border-gray-300  ">
            <div className="border border-gray-300 w-1/4">Product</div>
            <div className="border border-gray-300 w-1/6">S.no</div>
            <div className="border border-gray-300 w-1/4">Name</div>
            <div className="border border-gray-300 w-1/6">Quantity</div>
            <div className="border border-gray-300 w-1/6">Price</div>
            <div className="border border-gray-300 w-1/6">Total</div>
          </div>
      
        <div className="bg-white text-gray-600 text-sm leading-normal">
          {cart[0].products.map((item, index) => (
            <>
             
            <div className="flex items-center border border-gray-300 p-2">
                <img className="w-30 h-30 object-fill "   src={getProductImage(item.productId)} alt="Product Image"/>
                
                <div className="border border-gray-300 p-2 ml-1.5">{ 1 + index}</div> 
              <div className="border border-gray-300 p-2  ml-2">{getProductName(item.productId)}</div>
               <div className="border border-gray-300 p-2 ml-2">{(item.quantity)}</div>
                <div className="border border-gray-300 p-2 ml-2">$ {Math.floor(getProductPrice(item.productId))}</div>
                 <div className="border border-gray-300 p-2 ml-2">$ {Math.floor(getProductTotal(item.productId, item.quantity))}</div>
            </div>
            </>
          ))}
        </div>
      </div>
}
<h3 className="text-right p-4">Total : $ {Math.floor(totalAmount)}</h3>
 
<p className="text-blue-800 inline  italic font-bold text-sm"> Flipkart<img src="/icons8-flipkart-100.png"  className="w-7 h-7 inline ml-1" alt="abc"/> Assured</p>
    </div>
    
  );
}
