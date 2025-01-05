import Container from "./Container";
import Button from "./Button";
import { Link } from "react-router";
import Header from "./Header";
import { useTranslation } from "react-i18next"; // Import i18next hook

const DonateSection = () => {
  const { t } = useTranslation(); // Use i18next hook for translation

  return (
    <Container>
      <Header title={t("donateSection.header")} /> {/* Use translation key */}
      <div className="p-5 py-16">
        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* Section 1 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-8 mb-3">
              {t("donateSection.section1Title")} {/* Use translation key */}
            </h3>
            <p className="text-[18px] text-neutral-700 leading-10">
              {t("donateSection.section1Description")}{" "}
              {/* Use translation key */}
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-10 mb-3">
              {t("donateSection.section2Title")} {/* Use translation key */}
            </h3>
            <div className="space-y-7 text-neutral-700">
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("donateSection.techTitle")} {/* Use translation key */}
                </span>{" "}
                {t("donateSection.techDescription")} {/* Use translation key */}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("donateSection.awarenessTitle")}{" "}
                  {/* Use translation key */}
                </span>{" "}
                {t("donateSection.awarenessDescription")}{" "}
                {/* Use translation key */}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("donateSection.reachTitle")} {/* Use translation key */}
                </span>{" "}
                {t("donateSection.reachDescription")}{" "}
                {/* Use translation key */}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("donateSection.communityTitle")}{" "}
                  {/* Use translation key */}
                </span>{" "}
                {t("donateSection.communityDescription")}{" "}
                {/* Use translation key */}
              </p>
            </div>
          </div>
        </div>
        <Link
          to={"/payment"}
          className="flex justify-center items-center mt-10"
        >
          <Button className="bg-blue-500 rounded shadow-lg px-4 py-3 text-white font-semibold">
            {t("donateSection.donateButton")} {/* Use translation key */}
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default DonateSection;
