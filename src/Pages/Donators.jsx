import { useState, useEffect } from "react";
import Header from "../Components/Header";
import DonorCard from "../Components/Cards/DonorCard";
import axiosSeceure from "../apis";
import Loader from "../Components/Loader";
import Container from "../Components/Container";
import Banner from "../Components/Banner";

const Donators = () => {
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true); // Start loading
        const res = await axiosSeceure.get("/donors");
        setDonors(res.data);
        setFilteredDonors(res.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDonors();
  }, []);

  console.log(donors);

  const handleSort = (value) => {
    if (value) {
      const sortDonors = donors.filter((donor) => donor.bloodGroup === value);
      setFilteredDonors(sortDonors);
    } else {
      setFilteredDonors(donors); // Reset to all donors if no blood group is selected
    }
  };

  // Show the loader while loading
  if (loading) return <Loader />;

  // Render donor list
  return (
    <Container>
      <Banner />
      <div>
        <Header title={"Here is our donators"} />
        <div className="flex justify-end items-center gap-2">
          <p className="text-lg font-semibold text-gray-600">
            Sort by blood group
          </p>
          <select
            onChange={(e) => handleSort(e.target.value)}
            name="bloodGroup"
            required
            className="h-10 px-2 bg-rose-400 rounded-md text-white outline-none"
          >
            <option value={""}>Select One</option>
            <option value={"A+"}>A+</option>
            <option value={"A-"}>A-</option>
            <option value={"B+"}>B+</option>
            <option value={"B-"}>B-</option>
            <option value={"O+"}>O+</option>
            <option value={"O-"}>O-</option>
            <option value={"AB+"}>AB+</option>
            <option value={"AB-"}>AB-</option>
          </select>
        </div> <hr className="mt-5" />
        <div className="my-10">
          {filteredDonors?.length > 0 ? (
            <div
              id="donors"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-center justify-between"
            >
              {filteredDonors?.map((donor) => (
                <DonorCard donor={donor} key={donor?._id} />
              ))}
            </div>
          ) : (
            <p className="text-xl text-center my-56">No Donors Added</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Donators;
