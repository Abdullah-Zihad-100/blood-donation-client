import { HiMiniMapPin, HiMiniUserGroup } from "react-icons/hi2";
import Container from "./Container";
import { RiGroup2Fill } from "react-icons/ri";

const NetWork = () => {
    return (
      <Container>
        <div className="my-10  text-neutral-800">
          <h2 className="text-3xl text-center font-semibold p-3 uppercase">
            We re a network of
          </h2>

          <div>
            <div className="flex justify-around">
              <div className="flex justify-center items-center flex-col p-5 space-y-5">
                <HiMiniUserGroup className="text-rose-500 sm:text-6xl text-3xl" />
                <h2 className="sm:text-xl text-basexl font-semibold">
                  44 Donors
                </h2>
              </div>
              <div className="flex justify-center items-center flex-col p-5 space-y-5">
                <HiMiniMapPin className="text-rose-500 sm:text-6xl text-3xl" />
                <h2 className="sm:text-xl text-base font-semibold">
                  64 Districts
                </h2>
              </div>
              <div className="flex justify-center items-center flex-col p-5 space-y-5">
                <RiGroup2Fill className="text-rose-500 sm:text-6xl text-3xl" />
                <h2 className="sm:text-xl text-base font-semibold">3 Groups</h2>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
}
export default NetWork;