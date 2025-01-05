import { useEffect, useState } from "react";
import { HiMiniMapPin, HiMiniUserGroup } from "react-icons/hi2";
import { RiGroup2Fill } from "react-icons/ri";
import Container from "./Container";
import axiosSeceure from "../apis";
import { useTranslation } from "react-i18next"; // Import i18next hook

const NetWork = () => {
  const { t } = useTranslation(); // Use i18next hook for translation
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
          {t("network.title")} {/* Use translation key */}
        </h2>

        <div>
          <div className="flex justify-around">
            {/* Donors Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <HiMiniUserGroup className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">
                {isLoading
                  ? t("network.loading")
                  : `${donors.length} ${t("network.donors")}`}{" "}
                {/* Use translation keys */}
              </h2>
            </div>

            {/* District Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <HiMiniMapPin className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">
                {t("network.districts")}
              </h2>
            </div>

            {/* Groups Count */}
            <div className="flex justify-center items-center flex-col p-5 space-y-5">
              <RiGroup2Fill className="text-rose-500 sm:text-6xl text-3xl" />
              <h2 className="sm:text-xl text-base font-semibold">
                {t("network.groups")}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default NetWork;
