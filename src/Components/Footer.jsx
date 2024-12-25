import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TiWorld } from "react-icons/ti";
import Container from "./Container";

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-rose-300 to-rose-500 p-3">
        <Container>
          <div className="flex justify-between md:gap-6 gap-2">
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-2xl md:text-3xl font-semibold">
                Compact Blood Donation
              </h2>
              <p className="text-white md:text-[16px] text-sm">
                This websie is an automated blood service that connects blood
                searchers with voluntary blood donors in a moment through SMS
                and website.
              </p>
              <div className="flex gap-4 py-3 text-neutral-600 text-xl">
                <a
                  target="_blank"
                  href="https://www.facebook.com/CompactPolytechnic"
                >
                  {" "}
                  <RiFacebookCircleFill />
                </a>
                <IoLogoWhatsapp />
                <a href="https://cpifeni.edu.bd/" target="_blank">
                  <TiWorld />
                </a>
              </div>
              <p className="cursor-pointer text-black ">
                Terms & Conditions | Privacy Policy
              </p>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-2xl md:text-3xl font-semibold">
                Ours Links
              </h2>
              <ul className="text-white text-lg md:space-y-2">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/donators">Donators</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/reviews">Reviews</a>
                </li>
              </ul>
            </div>
            <div className="flex-1 space-y-2">
              <h2 className="text-white text-2xl md:text-3xl font-semibold">
                <a href="/about">About Blood</a>
              </h2>
              <ul className="text-white text-lg sm:space-y-2">
                <li>What is blood</li>
                <li>What is blood donation</li>
                <li>Who can donate blood</li>
                <li>Different blood group</li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
      <p className="text-white bg-neutral-800 p-2 md:p-3 text-center uppercase sm:text-md text-sm">
        Copyright © Cpi 2024 - Present | Made with
        <span className="text-red-600"> ❤ </span> by Cpi 6Th (Abdullah-Zihad)
      </p>
    </>
  );
};
export default Footer;
