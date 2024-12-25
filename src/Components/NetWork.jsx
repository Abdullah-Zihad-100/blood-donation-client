import { useEffect, useState } from "react";
import { HiMiniMapPin, HiMiniUserGroup } from "react-icons/hi2";
import { RiGroup2Fill } from "react-icons/ri";
import Container from "./Container";
import axiosSeceure from "../apis";

const NetWork = () => {
  const [donors, setDonors] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch all donors
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const res = await axiosSeceure.get("/donors");
        setDonors(res?.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDonors();
  }, []);

  return (
    <Container>
      <div className="my-10 text-neutral-800">
        <h2 className="text-3xl text-center font-semibold p-3 uppercase">
          We&apos;re a network of
        </h2>

        <div>
          <div className="flex justify-around">
            {/* Donors Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <HiMiniUserGroup className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">
                {isLoading ? "Loading..." : `${donors.length} Donors`}
              </h2>
            </div>

            {/* District Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <HiMiniMapPin className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">
                64 Districts
              </h2>
            </div>

            {/* Groups Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <RiGroup2Fill className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">3 Groups</h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NetWork;
