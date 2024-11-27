import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axiosSeceure from "../apis";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import Button from "./Button";
import Loader from "./Loader";

const DonarDetails = () => {
  const { id } = useParams();
  const [donor, setDonor] = useState(null);

  useEffect(() => {
    axiosSeceure
      .get(`/donors/${id}`)
      .then((res) => setDonor(res.data))
      .catch((err) => console.error("Error fetching donor details:", err));
  }, [id]);

  if (!donor) {
    return <Loader/>
  }

  const handleRequestBlood = () => {
    alert("Blood request sent successfully!");
    // Add your request logic here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 shadow-md rounded-lg my-10">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Photo */}
        <div>
          <img
            src={donor.profilePhoto}
            alt={donor.firstName}
            className="w-40 h-40 rounded-full shadow-lg object-cover"
          />
        </div>

        {/* Donor Basic Info */}
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            {donor.firstName} {donor.lastName}
          </h1>
          <p className="text-gray-600">{donor.gender}</p>
          <p className="text-gray-600">
            Blood Group:{" "}
            <span className="text-red-600 font-semibold">
              {donor.bloodGroup}
            </span>
          </p>
          <p className="text-gray-600">
            Contact:{" "}
            <a
              href={`tel:${donor.contactNumber}`}
              className="text-blue-600 hover:underline"
            >
              {donor.contactNumber}
            </a>
          </p>
          <p className="text-gray-600">
            Permanent Location: {donor.permanentLocation}
          </p>
        </div>
      </div>{" "}
      <hr className="border my-4 border-red-500" />
      {/* Additional Details */}
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Details</h2>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Availability: {donor.availability}</li>
            <li>
              Emergency Availability:{" "}
              {donor.emergencyAvailability ? "Yes" : "No"}
            </li>
            <li>Last Health Checkup: {donor.lastHealthCheckup}</li>
            <li>Last Blood Donate Time: {donor.lastBloodDonateTime}</li>
            <li>How Many Times Donated: {donor.howManyTimesDonate}</li>
            <li>
              Preferred Donation Type:{" "}
              {donor.preferredDonationType || "not provide"}
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-gray-800">Affiliations</h2>
          <ul className="mt-2 text-gray-600 space-y-1">
            <li>Blood Bank: {donor.bloodBankAffiliation}</li>
            <li>Current Location: {donor.currentLocation}</li>
            <li>
              <RiFacebookCircleFill
                className="shadow inline me-2 my-2"
                size={25}
                color="#0866FF"
              />
              <a
                href={donor.facebookUrl}
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
                href={donor.whatsappUrl}
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
      <div className="mt-10 flex justify-center">
        <Button>Make a blood requste</Button>
      </div>
    </div>
  );
};

export default DonarDetails;
