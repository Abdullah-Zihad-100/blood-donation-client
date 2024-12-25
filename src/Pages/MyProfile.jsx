import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axiosSeceure from "../apis";
import Loader from "../Components/Loader";
import DetailsSec from "../Components/DetailsSec";


const MyProfile = () => {
  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true); // Start loading
       const res = await axiosSeceure.get(
         `/profile-donors?email=${user?.email}`
       );
        setDonor(res.data.donor);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDonors();
  }, [user?.email]);
  console.log(donor);

  if(loading) {
    <Loader/>
  }
  return (
    <div>
      <DetailsSec donor={donor}/>
    </div>
  );
};
export default MyProfile;
