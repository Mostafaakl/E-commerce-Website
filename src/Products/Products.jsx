import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../axiosInstance/axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Products.css"
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-5">Our Products</h2>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card product-card h-100 shadow-sm">
              <div className="product-image-container">
                <img
                  className="card-img-centre  product-image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <Link to={`/details/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
              <div className="card-footer text-center">
                <small className="text-muted">Price: ${product.price}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
