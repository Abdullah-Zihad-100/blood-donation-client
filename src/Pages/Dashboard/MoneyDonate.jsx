import { useQuery } from "@tanstack/react-query";
import { paymentsHistoryAll } from "../../apis/auth";

const MoneyDonate = () => {
  const { data, refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await paymentsHistoryAll();
      return res;
    },
  });

  return (
    <div>
      <div className="border m-5 rounded">
        <table className="table">
          <thead>
            <tr className="text-white bg-rose-400">
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Transection Id</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user?._id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.date}</td>
                <td>{user?.transactionId}</td>
                <td>${user?.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MoneyDonate;
