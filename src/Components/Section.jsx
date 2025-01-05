import { Link } from "react-router";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation(); // useTranslation hook for i18n

  return (
    <Container>
      <div className="p-5 py-16">
        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* Section 1 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-8 mb-3">
              {t("section.section1.title")}
            </h3>
            <p className="text-[18px] text-neutral-700 leading-10">
              {t("section.section1.description")}
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-10 mb-3">
              {t("section.section2.title")}
            </h3>
            <div className="space-y-7 text-neutral-700">
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("section.section2.features.findDonors.title")}
                </span>{" "}
                {t("section.section2.features.findDonors.description")}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("section.section2.features.reliableInfo.title")}
                </span>{" "}
                {t("section.section2.features.reliableInfo.description")}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("section.section2.features.communitySupport.title")}
                </span>{" "}
                {t("section.section2.features.communitySupport.description")}
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  {t("section.section2.features.educationalResources.title")}
                </span>{" "}
                {t(
                  "section.section2.features.educationalResources.description"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link
            to="/about"
            className="bg-red-500 rounded shadow-lg px-4 py-3 text-white font-semibold"
          >
            {t("section.button.learnMore")}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Section;
