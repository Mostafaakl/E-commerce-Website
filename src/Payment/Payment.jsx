import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import "../Payment.css";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/create-payment-intent", {
        amount: 10, // Replace with your product amount
      });

      const clientSecret = response.data.clientSecret;

      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (paymentResult.error) {
        setError(paymentResult.error.message);
      } else if (paymentResult.paymentIntent.status === "succeeded") {
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Complete Your Payment</h2>
      {success ? (
        <div className="payment-success">
          <h3>🎉 Payment Successful!</h3>
          <p>Thank you for your purchase!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="payment-form">
          <CardElement className="card-element" />
          <button
            type="submit"
            className="payment-button"
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay $10"}
          </button>
        </form>
      )}
      {error && <div className="payment-error">{error}</div>}
    </div>
  );
};

export default Payment;
