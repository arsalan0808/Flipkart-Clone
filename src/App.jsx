import Home from "./components/Home";
import SingleProducts from "./components/SingleProducts";
import ProductsByCat from "./components/ProductsByCat";
import { BrowserRouter, Routes, Link, Route } from "react-router-dom";
import axios from "axios";

import { useState, useEffect } from "react";
import Login from "./components/Login";
import User from "./components/User";
import Cart from "./components/Cart";
import OrderPlaced from "./components/OrderPlaced";
import Footer from "./components/Footer";

function App() {
  const [navbar, setNavbar] = useState([]);
  const [isloggedIn, setisLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getNavApi();
    getUserStatus();
  }, []);

  async function getNavApi() {
    let res = await axios.get("https://fakestoreapi.com/products/categories");
    setNavbar(res.data);
  }

  function getUserStatus() {
    let userToken = localStorage.getItem("token");
    if (userToken != null) {
      setisLoggedIn(true);
    }
  }

  function logout() {
    localStorage.removeItem("token");
    setisLoggedIn(false);
  }

  function toggleSidebar() {
    setIsOpen(!isOpen);
  }

  function getRandomOriginalPriceOfThreeDigits() {
    return Math.floor(Math.random() * 200) + 1000;
  }

  return (
    <>
      <div>
        <BrowserRouter>
          {/* url */}
          {/* Styling Navbar through css tailwind  in flipkart ui style*/}

          {/* create a hamburger for mobile view */}
          <div className="bg-blue-500 p-4 flex items-center justify-between md:hidden">
            <img
              className="w-16 h-16 rounded-full"
              src="icons8-flipkart-100.png"
              alt="profile"
            />
            <div className="text-white font-bold">Flipkart</div>
            {/* sibebar functionality */}
            <label>
              <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                <input
                  onClick={toggleSidebar}
                  className="hidden peer"
                  type="checkbox"
                />
                <div className="w-[50%] h-[2px] bg-white rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
                <div className="w-[50%] h-[2px] bg-white rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
              </div>
            </label>
          </div>
          {isOpen && (
            <div className="bg-blue-500 p-6 flex flex-col gap-4 sm:hidden md:flex items-start justify-start w-full transition-transform duration-300 ease-in-out">
              <div>
                {" "}
                <Link className="text-white hover:text-yellow-300 font-bold" to="/">
                  Home
                </Link>
              </div>

              {navbar.map((navItem) => (
                <div id="item">
                  <Link className="text-white hover:text-yellow-300" to={`/productbycat/${navItem}`}>
                    {navItem}
                  </Link>
                </div>
              ))}

              {isloggedIn && (
                <div style={{ marginLeft: "20px" }}>
                  <Link className="text-white hover:text-yellow-300" to="/cart">
                    Cart    
                  </Link>
                </div>
              )}

              <div style={{ marginLeft: "20px" }}>
                <Link className="text-white hover:text-yellow-300" to="/users">
                  Users
                </Link>
              </div>

              {isloggedIn && (
                <>
                  <div style={{ marginLeft: "20px" }}>
                    <Link className="text-white hover:text-yellow-300" onClick={logout}>
                      Logout
                    </Link>
                  </div>
                  <div style={{ marginLeft: "20px" }}>
                    <Link className="text-white hover:text-yellow-300" to="/orderplaced">
                      Order Placed
                    </Link>
                  </div>
                </>
              )}

              {!isloggedIn && (
                <div style={{ marginLeft: "20px" }}>
                  {" "}
                  <Link className="text-white hover:text-yellow-300" to="/login">
                    Login
                  </Link>
                </div>
              )}
            </div>
          )}
          {/* side bar of hamburger */}

          {/* desktop view */}

          <div className="bg-blue-500 p-6 flex flex-wrap gap-4 sm: hidden md:flex items-center justify-start">
            <div>
              {" "}
              <Link className="text-white  hover:text-yellow-300" to="/">
                Home
              </Link>
            </div>

            {navbar.map((navItem) => (
              <div id="item">
                <Link className="text-white hover:text-yellow-300" to={`/productbycat/${navItem}`}>
                  {navItem}
                </Link>
              </div>
            ))}

            {isloggedIn && (
              <div style={{ marginLeft: "20px" }}>
                <Link className="text-white hover:text-yellow-300" to="/cart">
                 Cart
                </Link>
              </div>
            )}

            <div style={{ marginLeft: "20px" }}>
              <Link className="text-white hover:text-yellow-300" to="/users">
                Users
              </Link>
            </div>

            {isloggedIn && (
              <>
                <div style={{ marginLeft: "20px" }}>
                  <Link className="text-white hover:text-yellow-300" onClick={logout}>
                    Logout
                  </Link>
                </div>
                <div style={{ marginLeft: "20px" }}>
                  <Link className="text-white hover:text-yellow-300" to="/orderplaced">
                    Order Placed
                  </Link>
                </div>
              </>
            )}

            {!isloggedIn && (
              <div style={{ marginLeft: "20px" }}>
                {" "}
                <Link className="text-white hover:text-yellow-300" to="/login">
                  Login
                </Link>
              </div>
            )}
            <div className=" flex items-center gap-1 ml-auto">
              <img
                className="w-16 h-16 rounded-full"
                src="icons8-flipkart-100.png"
                alt="profile"
              />
              <div className="text-white font-bold">Flipkart</div>
            </div>
          </div>
          {/* path */}

          <Routes>
            <Route
              element={
                <Home
                  getRandomOriginalPriceOfThreeDigits={
                    getRandomOriginalPriceOfThreeDigits
                  }
                />
              }
              path="/"
            ></Route>
            <Route
              element={
                <SingleProducts
                  getRandomOriginalPriceOfThreeDigits={
                    getRandomOriginalPriceOfThreeDigits
                  }
                />
              }
              path="/singleproduct/:id"
            ></Route>
            <Route
              element={
                <ProductsByCat
                  getRandomOriginalPriceOfThreeDigits={
                    getRandomOriginalPriceOfThreeDigits
                  }
                />
              }
              path="/productbycat/:navItem"
            ></Route>
            <Route
              element={<Login getUserStatus={getUserStatus} />}
              path="/login"
            ></Route>
            <Route element={<Cart />} path="/cart"></Route>
            <Route element={<User />} path="/users"></Route>
            <Route element={<OrderPlaced />} path="/orderplaced"></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
