import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import DetailsSec from "./DetailsSec";
import { getSingleDonor } from "../apis/auth";

const DonarDetails = () => {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(()=>{
    const featchData=async()=>{
      const res= await getSingleDonor(id)
      setDonor(res)  
      console.log(res);
    }
  featchData()
  },[id])
  if (!donor) {
    return <Loader/>
  }

  // const handleRequestBlood = () => {
  //   alert("Blood request sent successfully!");
  //   // Add your request logic here
  // };

  return (
   <DetailsSec donor={donor}/>
  );
};

export default DonarDetails;
