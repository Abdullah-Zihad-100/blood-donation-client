/* eslint-disable react/prop-types */
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import Button from "./Button";
import useRole from "../Hooks/useRole";
import useAuth from "../Hooks/useAuth";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import { deleteDonor, saveAsADonator, sendReq } from "../apis/auth";
import { useNavigate } from "react-router";

const DetailsSec = ({ donor }) => {
  const [role] = useRole();
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleDelete = async (id) => {
    await saveAsADonator(user?.email);
    const res = await deleteDonor(id);
    navigate("/");
    window.location.reload();
    console.log(res);
  };

  const handleReq = async (e, email) => {
    e.preventDefault();
    const from = e.target;
    const patientName = from.patientName.value;
    const hospitalName = from.hospitalName.value;
    const contactNumber = from.contactNumber.value;
    const currentLocation = from.currentLocation.value;
    const details = {
      patientName,
      hospitalName,
      currentLocation,
      contactNumber,
      email,
    };
    toast.success("Requste Send Successfull");
    console.log(details);
    await sendReq(details);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg my-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Photo */}
        <div>
          <img
            src={donor?.profilePhoto}
            alt={donor?.firstName}
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Donor Basic Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {donor?.firstName} {donor?.lastName}
          </h1>
          <p className="text-gray-600">{donor?.gender}</p>
          <p className="text-gray-600">
            Blood Group:{" "}
            <span className="text-red-600 font-semibold">
              {donor?.bloodGroup}
            </span>
          </p>
          <p className="text-gray-600">
            Contact:{" "}
            <a
              href={`tel:${donor?.contactNumber}`}
              className="text-blue-600 hover:underline"
            >
              {donor.contactNumber}
            </a>
          </p>
          <p className="text-gray-600">
            Permanent Location: {donor?.permanentLocation}
          </p>
        </div>
      </div>{" "}
      <hr className="border my-4 border-red-500" />
      {/* Additional Details */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Details</h2>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Availability: {donor?.availability}</li>
            <li>
              Emergency Availability:{" "}
              {donor.emergencyAvailability ? "Yes" : "No"}
            </li>
            <li>Last Health Checkup: {donor?.lastHealthCheckup}</li>
            <li>Last Blood Donate Time: {donor?.lastBloodDonateTime}</li>
            <li>How Many Times Donated: {donor?.howManyTimesDonate}</li>
            <li>
              Preferred Donation Type:{" "}
              {donor?.preferredDonationType || "not provide"}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">Affiliations</h2>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Blood Bank: {donor?.bloodBankAffiliation}</li>
            <li>Current Location: {donor?.currentLocation}</li>
            <li>
              <RiFacebookCircleFill
                className="shadow inline me-2 my-2"
                size={25}
                color="#0866FF"
              />
              <a
                href={donor?.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Facebook Profile
              </a>
            </li>
            <li>
              <IoLogoWhatsapp
                className="shadow inline me-2 -mt-2"
                size={25}
                color="#0CC143"
              />
              <a
                href={donor?.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:underline"
              >
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Motivation and Medical Info */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800">Motivation</h2>
        <p className="text-gray-600 mt-2">{donor.donationMotivation}</p>
      </div>
      {/* Action Button */}
      <div className="mt-10 flex justify-center gap-x-5">
        {user && donor?.email !== user?.email && (
          // <button onClick={()=>handleReq(donor?.email)}>
          //   <Button>Make a blood requste</Button>
          // </button>

          <div>
            <Button>
              <button
                onClick={() =>
                  document.getElementById(`update_modal_1`).showModal()
                }
              >
                Send blood request
              </button>
            </Button>

            {/* Update Role Modal */}
            <dialog id={`update_modal_1`} className="modal">
              <div className="modal-box">
                <h2 className="text-center text-rose-500 text-3xl  mb-4">
                  Patient Details
                </h2>
                <form
                  onSubmit={(e) => handleReq(e, donor?.email)}
                  className="flex flex-col items-center gap-4"
                >
                  <div className="flex items-center gap-5 justify-center">
                    <label className="w-full">
                      <p className="text-lg font-semibold">Patient Name</p>
                      <input
                        placeholder="patient name"
                        type="text"
                        required
                        name="patientName"
                        className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                      />
                    </label>
                    <label className="w-full">
                      <p className="text-lg font-semibold">Contact Number</p>
                      <input
                        placeholder="ontact number"
                        type="number"
                        required
                        name="contactNumber"
                        className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                      />
                    </label>
                  </div>
                  <div className="flex items-center gap-5 justify-center">
                    <label className="w-full">
                      <p className="text-lg font-semibold">Hospital Name</p>
                      <input
                        placeholder="hospital name"
                        type="text"
                        required
                        name="hospitalName"
                        className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                      />
                    </label>
                    <label className="w-full">
                      <p className="text-lg font-semibold">Current Location</p>
                      <input
                        placeholder="patient current location"
                        type="text"
                        required
                        name="currentLocation"
                        className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                      />
                    </label>
                  </div>

                  <div className="modal-action justify-center mt-6">
                    <button
                      type="button"
                      onClick={() =>
                        document.getElementById(`update_modal_1`).close()
                      }
                      className="btn btn-outline"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() =>
                        document.getElementById(`update_modal_1`).close()
                      }
                      type="submit"
                      className="btn bg-rose-500 hover:bg-rose-600 text-white"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
          </div>
        )}

        {user && role?.role === "donator" && donor?.email == user?.email && (
          <>
            <Link to={`/edit-profile`}>
              <button className="p-3 rounded bg-stone-200 text-red-500 font-semibold">
                Edit Profile
              </button>
            </Link>
            <button
              className="p-3 rounded bg-red-500 text-white font-semibold"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Delete My Donor Profile
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Alart</h3>
                <p className="py-4">Are you sure ? you delete your profile!</p>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                  <button
                    onClick={() => handleDelete(donor?._id)}
                    className="btn bg-rose-500 text-white"
                  >
                    Sure
                  </button>
                </div>
              </div>
            </dialog>
          </>
        )}
      </div>
    </div>
  );
};
export default DetailsSec;
