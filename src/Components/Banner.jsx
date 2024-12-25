import { Link } from "react-router";
import Container from "./Container";
import useRole from "../Hooks/useRole"
const Banner = () => {

  const [role]=useRole();

    return (
      <div>
        <Container>
          <div className="bg-gradient-to-r from-rose-500 to-rose-300 rounded-md h-[400px] flex items-center ">
            <div className="md:w-4/5 md:p-10 p-8">
              <div>
                <h2 className="md:text-5xl text-3xl font-semibold text-white drop-shadow-lg mb-3">
                  Social media platform to connect blood searchers with donors
                </h2>
                <p className="text-lg text-white drop-shadow-lg">
                  It is a real-time free platform to help blood searchers
                  connect voluntary blood donors around Bangladesh.
                </p>
                <div className="mt-5 flex gap-5">
               {
                role && role.role==="user" &&
                
                    <Link
                      to={"/donators-add"}
                      className="bg-red-500 rounded shadow-lg px-4 py-3 text-white font-semibold"
                    >
                      Join as a Donor
                    </Link>

               }

                  <Link
                    to={"/donators"}
                    className="bg-white rounded shadow-lg px-4 py-3 text-red-500"
                  >
                    Search Donor
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
}
export default Banner;