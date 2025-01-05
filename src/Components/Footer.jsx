import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-gradient-to-r from-rose-300 to-rose-500 p-3">
        <Container>
          <div className="flex justify-between md:gap-6 gap-2">
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                {t("footer.title")}
              </h2>
              <p className="text-white md:text-[16px] text-sm">
                {t("footer.description")}
              </p>
              <div className="flex gap-4 py-3 text-neutral-600 text-xl">
                <a
                  target="_blank"
                  href="https://www.facebook.com/CompactPolytechnic"
                  rel="noreferrer"
                >
                  <RiFacebookCircleFill />
                </a>
                <IoLogoWhatsapp />
                <a
                  href="https://cpifeni.edu.bd/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TiWorld />
                </a>
              </div>
              <p className="cursor-pointer text-gray-700">
                {t("footer.terms")}
              </p>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                {t("footer.linksTitle")}
              </h2>
              <ul className="text-white text-lg md:space-y-2">
                <li>
                  <a className="text-sm md:text-[15px]" href="/">
                    {t("footer.links.home")}
                  </a>
                </li>
                <li>
                  <a className="text-sm md:text-[15px]" href="/about">
                    {t("footer.links.about")}
                  </a>
                </li>
                <li>
                  <a className="text-sm md:text-[15px]" href="/donators">
                    {t("footer.links.donators")}
                  </a>
                </li>
                <li>
                  <a className="text-sm md:text-[15px]" href="/contact">
                    {t("footer.links.contact")}
                  </a>
                </li>
                <li>
                  <a className="text-sm md:text-[15px]" href="/reviews">
                    {t("footer.links.reviews")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-xl md:text-2xl font-semibold">
                <a href="/about">{t("footer.aboutBloodTitle")}</a>
              </h2>
              <ul className="text-white text-lg sm:space-y-2">
                <li className="text-sm md:text-[15px]">
                  {t("footer.aboutBlood.whatIsBlood")}
                </li>
                <li className="text-sm md:text-[15px]">
                  {t("footer.aboutBlood.whatIsDonation")}
                </li>
                <li className="text-sm md:text-[15px]">
                  {t("footer.aboutBlood.whoCanDonate")}
                </li>
                <li className="text-sm md:text-[15px]">
                  {t("footer.aboutBlood.bloodGroups")}
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <p className="text-white bg-neutral-800 p-2 md:p-3 text-center uppercase sm:text-md text-sm">
        {t("footer.copyright", {
          year: new Date().getFullYear(),
          creator: "CPI 6Th (Abdullah-Zihad)",
        })}
      </p>
    </>
  );
};

export default Footer;
