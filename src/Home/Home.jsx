import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  return (
    <div className="home">
      <div className="hero-section text-center bg-light py-5">
        <div className="container">
          <h1 className="display-4">Welcome to ModernMart</h1>
          <p className="lead">
            Discover premium products that suit your lifestyle.
          </p>
          <Link to="/Products" className="btn btn-primary btn-lg mt-3">
            Explore Products
          </Link>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row">
          <div className="col-md-4">
            <Link to="/Products">
              <div className="card">
                <img
                  src="/Pictures/66d4d023f7111e6e6c57f80a45de8446.webp"
                  alt="Modern Lamp"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Modern Lamp</h5>
                  <p className="card-text">Brighten your space with style.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Products">
              <div className="card">
                <img
                  src="/Pictures/71C3lbbeLsL._AC_SL1000_.jpg"
                  alt="Smart Speaker"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Smart Speaker</h5>
                  <p className="card-text">Control your home with your voice.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/Products">
              <div className="card">
                <img
                  src="/Pictures/81HznWNJPnL._AC_SL1500_.jpg"
                  alt="Ergonomic Chair"
                  className="card-img-top"
                />
                <div className="card-body">
                  <h5 className="card-title">Ergonomic Chair</h5>
                  <p className="card-text">Comfort meets functionality.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      

      <div className="testimonials py-5">
        <h3 className="text-center mb-4">What Our Customers Say</h3>
        <div className="row">
          <div className="col-md-4">
          <div className="card">
            <div className="card-body">
            <blockquote>
              "The ergonomic chair is a game changer for my workspace!"
            </blockquote>
            
            <p className="text-end">- John D.</p>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
          <div className="card-body">
            <blockquote>
              "Amazing quality and fast delivery. Highly recommend ModernMart!"
            </blockquote>
            <p className="text-end">- Sarah P.</p>
            </div>
            </div>
          </div>
          <div className="col-md-4">
          <div className="card">
          <div className="card-body">
            <blockquote>
              "The modern lamp added elegance to my living room."
            </blockquote>
            <p className="text-end">- Mike W.</p>
            </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className="newsletter py-5 bg-light text-center">
        <h3>Stay Updated</h3>
        <p>Subscribe to our newsletter and never miss an update!</p>
        <form className="d-flex justify-content-center">
          <input
            type="email"
            className="form-control w-50 me-2"
            placeholder="Enter your email"
          />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h5>ModernMart</h5>
              <p>Changing shopping culture.</p>
            </div>
            <div className="col-md-6 text-end">
              <h5>Follow Us</h5>
              <a href="#" className="text-white me-2">
                Facebook
              </a>
              <a href="#" className="text-white me-2">
                Instagram
              </a>
              <a href="#" className="text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
