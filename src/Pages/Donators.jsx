import { useState, useEffect } from "react";
import Header from "../Components/Header";
import DonorCard from "../Components/Cards/DonorCard";
import axiosSeceure from "../apis";
import Loader from "../Components/Loader";
import Container from "../Components/Container";
import Banner from "../Components/Banner";

const Donators = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true); // Start loading
        const res = await axiosSeceure.get("/donors");
        setDonors(res.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDonors();
  }, []);

  console.log(donors);

  // Show the loader while loading
  if (loading) return <Loader />;

  // Render donor list
  return (
    <Container>
      <Banner/>
      <div>
        <Header title={"Here is our donators"} />
        <div className="my-10">
          <div id="donors" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between">
            {donors?.map((donor) => (
              <DonorCard donor={donor} key={donor?._id} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Donators;
