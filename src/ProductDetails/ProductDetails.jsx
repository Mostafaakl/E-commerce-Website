import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../axiosInstance/axiosInstance";
import "bootstrap/dist/css/bootstrap.min.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    axiosInstance
      .get(`/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p className="mt-3">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="row g-0">
              {/* Image Section */}
              <div className="col-md-6">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid rounded-start"
                  style={{ objectFit: "cover", height: "100%" }}
                />
              </div>
              {/* Content Section */}
              <div className="col-md-6">
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="card-text">{product.description}</p>
                  <h4 className="text-primary mt-3">Price: ${product.price}</h4>
                  <button className="btn btn-primary mt-4">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
