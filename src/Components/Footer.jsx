import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import Container from "./Container";


const Footer = () => {
    return (
      <>
        <div className="bg-gradient-to-r from-rose-300 to-rose-500 p-10">
          <Container>
            <div className="flex justify-between gap-6 ">
              <div className="flex-1 space-y-2">
                <h2 className="text-white text-2xl md:text-4xl font-semibold">
                  Compact Blood Donation
                </h2>
                <p className="text-white">
                  This websie is an automated blood service that connects blood
                  searchers with voluntary blood donors in a moment through SMS
                  and website.
                </p>
                <div className="flex gap-4 py-3 text-neutral-600 text-xl">
                  <RiFacebookCircleFill />
                  <IoLogoWhatsapp />
                  <FaInstagramSquare />
                </div>
                <p className="cursor-pointer text-black">
                  Terms & Conditions | Privacy Policy
                </p>
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-white text-2xl md:text-4xl font-semibold">
                  Ours Links
                </h2>
                <ul className="text-white text-lg space-y-2">
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Donators</li>
                  <li>Contact Us</li>
                  <li>Feedback</li>
                </ul>
              </div>
              <div className="flex-1 space-y-2">
                <h2 className="text-white text-2xl md:text-4xl font-semibold">
                  About Blood
                </h2>
                <ul className="text-white text-lg space-y-2">
                  <li>What is blood</li>
                  <li>What is blood donation</li>
                  <li>Who can donate blood</li>
                  <li>Different blood group</li>
                </ul>
              </div>
            </div>
          </Container>
        </div>
        <p className="text-white bg-neutral-800 p-3 text-center uppercase">
          Copyright © Cpi 2024 - Present | Made with
          <span className="text-red-600"> ❤ </span> by Cpi 6Th (Abdullah-Zihad)
        </p>
      </>
    );
}
export default Footer;