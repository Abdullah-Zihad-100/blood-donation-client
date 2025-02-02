import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../Components/Header";
import DonorCard from "../Components/Cards/DonorCard";
import axiosSeceure from "../apis";
import Loader from "../Components/Loader";
import Container from "../Components/Container";
import Banner from "../Components/Banner";

const Donators = () => {
  const { t } = useTranslation(); // Translation hook
  const [donors, setDonors] = useState([]);
  const [filteredDonors, setFilteredDonors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true);
        const res = await axiosSeceure.get("/donors");
        setDonors(res.data);
        setFilteredDonors(res.data);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDonors();
  }, []);

  const handleSort = (value) => {
    if (value) {
      const sortDonors = donors.filter((donor) => donor.bloodGroup === value);
      setFilteredDonors(sortDonors);
    } else {
      setFilteredDonors(donors); // Reset to all donors if no blood group is selected
    }
  };

  if (loading) return <Loader />;

  return (
    <Container>
      <Banner />
      <div>
        <Header title={t("donators.title")} />
        <div className="flex justify-end items-center gap-2">
          <p className="text-lg font-semibold text-gray-600">
            {t("donators.sortBy")}
          </p>
          <select
            onChange={(e) => handleSort(e.target.value)}
            name="bloodGroup"
            required
            className="h-10 px-2 bg-rose-400 rounded-md text-white outline-none"
          >
            <option value="">{t("donators.selectOne")}</option>
            <option value="A+">{t("donators.bloodGroups.A+")}</option>
            <option value="A-">{t("donators.bloodGroups.A-")}</option>
            <option value="B+">{t("donators.bloodGroups.B+")}</option>
            <option value="B-">{t("donators.bloodGroups.B-")}</option>
            <option value="O+">{t("donators.bloodGroups.O+")}</option>
            <option value="O-">{t("donators.bloodGroups.O-")}</option>
            <option value="AB+">{t("donators.bloodGroups.AB+")}</option>
            <option value="AB-">{t("donators.bloodGroups.AB-")}</option>
          </select>
        </div>
        <hr className="mt-5" />
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
            <p className="text-xl text-center my-56">
              {t("donators.noDonorsMessage")}
            </p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Donators;
