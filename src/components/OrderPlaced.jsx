// create a order placed component with a message and an image of order placed successfully but in flipkart style 
import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
export default function OrderPlaced() {

     
    return (
        // styling through tailwind css in flipkart style
        <div className="container mx-auto p-4">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto mt-10 text-center mb-5">
                <img src="/public/icons8-flipkart-100.png" alt="Order Placed" className="w-32 h-32 mx-auto mb-4" />

                <h1 className="text-2xl font-bold mb-2">Order Placed Successfully!</h1>
                <p className="text-gray-600 mb-4">Thank you for your purchase. Your order has been placed and is being processed.</p>
                <Link to="/" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Continue Shopping</Link>
            </div>
           
            <div className="mt-4">
                <p className="text-blue-800 inline italic font-bold text-sm"> Flipkart<img src="/public/icons8-flipkart-100.png" className="w-7 h-7 inline ml-1" alt="abc"/> Assured</p>
            </div>
        </div>
    );
}   