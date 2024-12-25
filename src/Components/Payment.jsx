import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import Header from "./Header";
import Container from "./Container";
import {useQuery} from "@tanstack/react-query"
import { paymentsHistory } from "../apis/auth";
import useAuth from "../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);
console.log(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
const {user}=useAuth()

  const {data,refetch}=useQuery({
    queryKey:["payments"],
    queryFn:async()=>{
      const res=await paymentsHistory(user?.email)
      return res;
    },
  })

  console.log(data);
  return (
    <div className="">
      <Header title="Donate Money" />
      <Container>
        <Elements stripe={stripePromise}>
          <CheckOutFrom  refetch={refetch}/>
        </Elements>

        <h2 className="text-2xl my-5  text-gray-600">Donate History:</h2>

        <div>
          {
            data?.length > 0 ? 
          <div className="overflow-x-auto mb-20 m-1 border rounded">
            <table className="table">
              {/* head */}
              <thead className="bg-rose-500 text-white">
                <tr>
                  <th>No</th>
                  <th>Date</th>
                  <th>Transaction Id</th>
                  <th>Amout</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {data?.map((payment, index) => (
                  <tr key={payment?._id}>
                    <td>{index+1}</td>
                    <td>{payment?.date}</td>
                    <td>{payment?.transactionId}</td>
                    <td>${payment?.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            :
<h2 className="text-xl text-center my-20">No History Available</h2>

          }
        </div>
      </Container>
    </div>
  );
};

export default Payment;
