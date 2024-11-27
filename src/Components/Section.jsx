import { Link } from "react-router";
import Container from "./Container";

const Section = () => {
  return (
    <Container>
      <div className="p-5 py-20">
        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* Section 1 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-8 mb-3">
              1. What is blood?
            </h3>
            <p className="text-[18px] text-neutral-700 leading-10">
              Blood is a vital fluid in the human body that transports oxygen,
              nutrients, and waste products. It consists of red blood cells,
              white blood cells, platelets, and plasma. Blood types are
              categorized as A, B, AB, and O, with positive or negative Rh
              factors. The body contains about 5-6 liters of blood, which makes
              up 7-8% of body weight.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-10 mb-3">
              2. Why Should Users Use Our Website?
            </h3>
            <div className="space-y-7 text-neutral-700">
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Find Donors Easily:
                </span>{" "}
                Locate blood donors in your area within minutes.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Reliable Information:
                </span>{" "}
                Access verified donor profiles and health status.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Community Support:
                </span>{" "}
                Join a community committed to saving lives.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Educational Resources:
                </span>{" "}
                Learn about blood types, donation processes, and safety
                precautions.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-10">
          <Link to={"/about"} className="bg-red-500 rounded shadow-lg px-4 py-3 text-white font-semibold">
           Learn More
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Section;
