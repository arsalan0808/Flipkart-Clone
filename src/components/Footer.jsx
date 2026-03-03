// flipkart style footer component with some links and icons in it and also make it responsive for mobile and desktop view
import React from "react";
import { Link } from "react-router-dom";    
export default function Footer() {  
    return (    
        // styling through tailwind css in flipkart style
        <div className="border border-gray-300  shadow-md p-4 hover:shadow-lg transition-shadow duration-300 ">
            <div className="">    
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-bold">Flipkart Clone</h2>
                        <p className="text-sm">© 2026 Flipkart Clone. All rights reserved.</p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/" className="text-sm hover:text-gray-400">Home</Link>        
                        <Link to="/cart" className="text-sm hover:text-gray-400">Cart</Link>

                        <Link to="/users" className="text-sm hover:text-gray-400">Users</Link>

                        <Link to="/orderplaced" className="text-sm hover:text-gray-400">Order Placed</Link>
                        <Link to="/login" className="text-sm hover:text-gray-400">Login</Link>
                    </div>
                </div>  
                <div className="mt-4 text-center">
                    <p className="text-sm">Follow us on:</p>
                    <div className="flex justify-center space-x-4 mt-2">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
                            <i className="fab fa-facebook-f"></i> Facebook      
                        </a>    
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
                            <i className="fab fa-twitter"></i> Twitter      
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-gray-400">
                            <i className="fab fa-instagram"></i> Instagram      
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}   