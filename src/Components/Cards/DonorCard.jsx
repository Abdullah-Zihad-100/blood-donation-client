import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiFacebookCircleFill } from "react-icons/ri";
import { Link } from "react-router";

/* eslint-disable react/prop-types */
const DonorCard = ({donor}) => {
    return (
      <div className="shadow-md rounded-md p-3 text-center">
        <figure>
          <img
            src={donor?.profilePhoto}
            className="object-cover w-[150px] h-[150px] mx-auto rounded-full"
          />
        </figure>{" "}
        <hr className="my-2" />
        <p className="text-lg font-semibold">
          {donor?.firstName} {donor?.lastName}
        </p>
        <h2 className="text-xl font-extrabold text-rose-500">
          <span className="text-neutral-700"> Group: </span>
          {donor?.bloodGroup}
        </h2>
        <p
          className={
            donor?.availability === "available"
              ? "text-green-600"
              : "text-red-600 underline"
          }
        >
          Status: {donor?.availability}
        </p>
        <p className="text-neutral-600">Gander: {donor?.gender}</p>
        <p className="text-neutral-600">
          Current Address: {donor?.currentLocation}
        </p>
        <div className="flex gap-6 justify-center py-3">
          <RiFacebookCircleFill className="shadow" size={28} color="#0866FF" />
          <IoLogoWhatsapp className="shadow" size={28} color="#0CC143" />
          <FaInstagramSquare className="shadow" size={28} color="#FE0263" />
        </div>
        <Link to={`/donators/details/${donor?._id}`}>
          <button className="text-sm bg-rose-500 rounded shadow-lg  py-2 text-white font-semibold w-full">
            More Details
          </button>
        </Link>
      </div>
    );
}
export default DonorCard;