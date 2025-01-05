import { Link } from "react-router";
import Container from "./Container";
import useRole from "../Hooks/useRole";
import { useTranslation } from "react-i18next"; // Import i18next hook

const Banner = () => {
  const { t } = useTranslation(); // Use i18next hook for translation
  const [role] = useRole();

  return (
    <div>
      <Container>
        <div className="bg-gradient-to-r from-rose-500 to-rose-300 rounded-md h-[400px] flex items-center ">
          <div className="md:w-4/5 md:p-10 p-8">
            <div>
              <h2 className="md:text-4xl text-3xl font-semibold text-white drop-shadow-lg mb-3">
                {t("banner.title")} {/* Use translation key */}
              </h2>
              <p className="text-lg text-white drop-shadow-lg">
                {t("banner.description")} {/* Use translation key */}
              </p>
              <div className="mt-5 flex gap-5">
                {role && role?.role === "user" && (
                  <Link
                    to={"/donators-add"}
                    className="bg-red-500 rounded shadow-lg px-4 py-3 text-white font-semibold"
                  >
                    {t("banner.joinAsDonor")} {/* Use translation key */}
                  </Link>
                )}
                <Link
                  to={"/donators"}
                  className="bg-white rounded shadow-lg px-4 py-3 text-red-500"
                >
                  {t("banner.searchDonor")} {/* Use translation key */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
