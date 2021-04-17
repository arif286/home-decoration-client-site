import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentCard from "./PaymentCard";

const stripePromise = loadStripe(
  "pk_test_51IeFj2EPnVwugJIPP9OtaSrwg0Xqlc1yvbLglcE8Rp38MVrRNWPwe0HdTJiOr9LmrRegBrj6JoSBAhXjmVYdNEcT00BZLKGVX7"
);
const Payment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCard payment={handlePayment} />
    </Elements>
  );
};
export default Payment;
