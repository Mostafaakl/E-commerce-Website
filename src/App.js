import React from "react";
import Header from "./navbar/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import AboutUs from "./About/About us.jsx"
import Products from "./Products/Products.jsx";
import ProductDetails from "./ProductDetails/ProductDetails.jsx";
import AddUser from "./users.js/addUser.js"
import Payment from "./Payment/Payment.jsx";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51QWjMEJRtzdRU678Yu7uNYaaEg1OTUGc70lA9NE9t8hLPHeLZOVErO8Xp8Dy9kKaoaimXYFLbtDm8VbiyVkzELHx00J5RESAbF"); 
function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Aboutus" element={<AboutUs />} />
         <Route path="/Products" element={<Products />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/payment" element={ <Elements stripe={stripePromise}>
                <Payment />
              </Elements> }/>
      
        </Routes>
      </Router>
    </div>
  );
}

export default App;
