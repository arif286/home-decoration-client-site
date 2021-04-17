import {
    CardCvcElement,
    CardExpiryElement,
    CardNumberElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import React, { useMemo, useState } from "react";


const useOptions = () => {
  const options = useMemo(
    () => ({
      style: {
        base: {
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    []
  );

  return options;
};

const PaymentCard = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("click me");

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    if (error) {
      setPaymentError(error.message);
    } else {
      setPaymentError(null);
      handlePayment(paymentMethod.id);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="w-100">
          Card number
          <CardNumberElement options={options} />
        </label>
        <label className="w-100">
          Expiration date
          <CardExpiryElement options={options} />
        </label>
        <label className="w-100">
          CVC
          <CardCvcElement options={options} />
        </label>
        <button className="admin-button" type="submit" disabled={!stripe}>
          Pay
        </button>
        {paymentError && (
          <p style={{ color: "red", marginTop: "20px" }}>{paymentError}</p>
        )}
      </form>
    </>
  );
};
export default PaymentCard;
