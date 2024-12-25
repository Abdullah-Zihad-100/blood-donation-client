import { FaUserFriends, FaUserShield } from "react-icons/fa";
import { MdOutlineGroups } from "react-icons/md";
import {useQuery} from "@tanstack/react-query"
import { adminState } from "../../apis/auth";
const Statistics = () => {

 const {data}=useQuery({
  queryFn:async()=>{
    const res= await adminState()
    return res;
  },
  queryKey:["admin-state"]
 })

 console.log(data);

    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center gap-5 items-center w-3/4 mx-auto text-gray-600">
        <div className="flex justify-center items-center flex-col w-full rounded-lg bg-rose-200 py-3 mt-10">
          <FaUserFriends className="text-rose-400 text-4xl" />
          <h2 className="text-xl font-semibold">Users: {data?.userCount}</h2>
        </div>
        <div className="flex justify-center items-center flex-col w-full rounded-lg bg-purple-200 py-3 mt-10">
          <FaUserShield className="text-rose-400 text-4xl" />
          <h2 className="text-xl font-semibold">
            Donators: {data?.donatorCount}
          </h2>
        </div>
        <div className="flex justify-center items-center flex-col w-full rounded-lg bg-gray-200 py-3 mt-10">
          <MdOutlineGroups className="text-rose-400 text-4xl" />
          <h2 className="text-xl font-semibold">Group: 2</h2>
        </div>
        <div className="flex justify-center items-center flex-col w-full rounded-lg bg-gray-200 py-3 mt-10 text-center">
          <MdOutlineGroups className="text-rose-400 text-4xl" />
          <h2 className="text-xl font-semibold">Total Amount: {data?.totalAmount}</h2>
        </div>
      </div>
    );
}
export default Statistics;