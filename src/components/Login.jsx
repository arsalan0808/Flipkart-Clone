import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

export default function Login({getUserStatus}) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  async function fun() {
    try {
      let obj = { username, password };
      let res = await axios.post("https://fakestoreapi.com/auth/login", obj);
     
      localStorage.setItem("token", res.data.token);
      getUserStatus();
      navigate("/");
    } catch (err) {
      console.log(err, "error found");
    }
  }
  return (
    // styling through tailwind css in flipkart style
      <>   <div className="container mx-auto p-4 ">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <p className="mb-5 font-medium font-serif">To login please enter your credentials, you can access username and password from the user's tab.</p>
      <input type="email" placeholder="username" onChange={(e) => setUsername(e.target.value)} className="border border-gray-300 rounded-lg p-2 mb-4 w-full"/>
      <input type="password"  placeholder="password" onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-lg p-2 mb-4 w-full"/>
      <button onClick={fun} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Login</button>
      </div>
    </div>
   
    <div className="mt-4">
      <p className="text-blue-800 inline  italic font-bold text-sm"> Flipkart<img src="/public/icons8-flipkart-100.png"  className="w-7 h-7 inline ml-1" alt="abc"/> Assured</p>    
      </div>
    </>
  );
}
