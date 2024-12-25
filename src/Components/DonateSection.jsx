import Container from "./Container";
import Button from "./Button";
import {Link} from "react-router";
import Header from "./Header";

const DonateSection = () => {
  return (
    <Container>
            <Header title={"  Support For Our Website"} />{" "}
      <div className="p-5 py-16">
        <div className="flex flex-col md:flex-row gap-7 items-center">
          {/* Section 1 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-8 mb-3">
              3. Why Donate to Us?
            </h3>
            <p className="text-[18px] text-neutral-700 leading-10">
              Your donations help us improve our platform, expand our reach, and
              save more lives. With your support, we can provide better
              services, create new features, and ensure the availability of
              essential resources for blood donation campaigns.
            </p>
          </div>

          {/* Section 2 */}
          <div className="flex-1">
            <h3 className="text-3xl text-neutral-900 leading-10 mb-3">
              How Your Contribution Makes a Difference
            </h3>
            <div className="space-y-7 text-neutral-700">
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Better Technology:
                </span>{" "}
                Help us build a faster, more reliable platform.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Increased Awareness:
                </span>{" "}
                Support campaigns to educate people about blood donation.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Broader Reach:
                </span>{" "}
                Enable us to connect with more donors and recipients globally.
              </p>
              <p className="text-[16px]">
                <span className="text-lg text-neutral-700 font-semibold ">
                  Community Growth:
                </span>{" "}
                Join hands in growing a life-saving community.
              </p>
            </div>
          </div>
        </div>
        <Link to={"/payment"} className="flex justify-center items-center mt-10">
          <Button className="bg-blue-500 rounded shadow-lg px-4 py-3 text-white font-semibold">
            Donate
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default DonateSection;
