import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { createPaymentIntent, savePaymentInfo } from "../apis/auth";
import useAuth from "../Hooks/useAuth";

const CheckOutFrom = ({ refetch }) => {
  const { user } = useAuth();
  const [clientSecret, setClientSecret] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  console.log(price);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const amount = e.target.price.value.trim();

    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setLoading(false);
      toast.error("Please enter a valid price.");
      return;
    }

    const convertedAmount = Math.round(parseFloat(amount) * 100); // Convert to cents
    console.log("Converted Amount (in cents):", convertedAmount);

    setPrice(convertedAmount);

    // always create a new payment intant

    try {
      const data = await createPaymentIntent(convertedAmount);
      console.log("Response from createPaymentIntant", data);
      if (data?.clientSecret) {
        setClientSecret(data?.clientSecret);
      } else {
        setLoading(false);

        toast.error("Failed to retrive client secret.");
        return;
      }
    } catch (error) {
      setLoading(false);

      console.error("Error creating payment intent:", error);
      toast.error("Failed to create payment intent. Try again.");
    }

    if (!stripe || !elements) {
      console.error("Stripe or Elements not loaded");
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      console.error("Card Element not loaded");
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setLoading(false);

      console.error("Payment Error:", error);
      toast.error(error.message);
      setErrorMessage(error.message);
    } else {
      setErrorMessage("");
      console.log("Payment Method:", paymentMethod);
    }

    try {
      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card,
            billing_details: {
              email: user?.email,
              name: user?.displayName,
            },
          },
        });

      if (confirmError) {
        setLoading(false);

        console.error("Confirmation Error:", confirmError);
        setErrorMessage(confirmError.message);
      }

      console.log("Payment Intent:", paymentIntent);

      if (paymentIntent?.status === "succeeded") {
        const paymentInfo = {
          amount: amount,
          name: user?.displayName,
          email: user?.email,
          transactionId: paymentIntent.id,
          date: new Date(),
        };
        console.log("Payment Info:", paymentInfo);
        const res = await savePaymentInfo(paymentInfo);
        console.log(res);
        toast.success("Payment Successful");
        e.target.reset();
      }
    } catch (error) {
      setLoading(false);

      console.error("Error confirming payment:", error);
      toast.error("Payment confirmation failed. Try again.");
    } finally {
      setLoading(false);
      refetch();
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-semibold my-2">
          Amount <br />
          <input
            name="price"
            type="text"
            required
            className="border p-1 rounded mb-3 w-full outline-none"
            placeholder="$0"
          />
        </label>
        <CardElement
          className="border p-2 h-[40px]"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>

        <div className="flex justify-center">
          <button
            className="btn bg-rose-500 text-white my-4 w-[100px]"
            type="submit"
            disabled={!stripe || loading}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutFrom;
