import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import axiosSeceure from "../apis";
import Loader from "../Components/Loader";
import Button from "../Components/Button";
import { IoIosCamera } from "react-icons/io";
import Header from "../Components/Header";
import Container from "../Components/Container";
import toast from "react-hot-toast";
import { imgUplord } from "../apis/utils";
import { editProfile } from "../apis/auth.js";
import {useNavigate} from "react-router"
const EditDonator = () => {
  const navigete=useNavigate();
  const [selectedImage, setSelectedImage] = useState(
    "https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
  );

  const [donor, setDonor] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();

  const handleFileChange = (e) => {
    const file = e.target?.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        setLoading(true); // Start loading
        const res = await axiosSeceure.get(
          `/profile-donors?email=${user?.email}`
        );
        setDonor(res.data.donor);
      } catch (error) {
        console.error("Error fetching donors:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchDonors();
  }, [user?.email]);
  console.log(donor);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.files[0];
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const dateOfBirth = form.dateOfBirth.value;
    const currentLocation = form.currentLocation.value;
    const permanentLocation = form.permanentLocation.value;
    const bloodGroup = form.bloodGroup.value;
    const lastBloodDonateTime = form.lastBloodDonateTime.value;
    const facebookUrl = form.facebookUrl.value;
    const whatsappUrl = form.whatsappUrl.value;
    const contactNumber = form.contactNumber.value;
    const howManyTimesDonate = form.howManyTimesDonate.value;
    const availability = form.availability.value;
    const emergencyAvailability = form.emergencyAvailability.value;
    const gender = form.gender.value;
    const lastHealthCheckup = form.lastHealthCheckup.value;
    const donationMotivation = form.donationMotivation.value;
    const bloodBankAffiliation = form.bloodBankAffiliation.value;

    try {
      const loading = toast.loading("...processing");
      const profilePhoto = await imgUplord(image);
      console.log(profilePhoto);

      if (profilePhoto) {
        const donorData = {
          email: user?.email,
          profilePhoto,
          firstName,
          lastName,
          dateOfBirth,
          currentLocation,
          permanentLocation,
          bloodGroup,
          lastBloodDonateTime,
          facebookUrl,
          whatsappUrl,
          contactNumber,
          howManyTimesDonate,
          availability,
          emergencyAvailability,
          gender,
          lastHealthCheckup,
          donationMotivation,
          bloodBankAffiliation,
        };
        console.log(donorData);
       const res= await editProfile(donor?._id, donorData);
       console.log(res);
        toast.dismiss(loading);
        toast.success("Successfully Donor Added");
        navigete("/my-profile")
      } else {
        return toast.error("Image not uploard");
      }
    } catch (err) {
      toast.dismiss();
      console.log(err);
      toast.error(err.message, "Uplord a image");
    }

    // try {
    // }
    // catch(err){
    //   console.log(err)
    // }
  };

  if (loading) {
    <Loader />;
  }

  return (
    <Container>
      <div className="p-5">
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col gap-y-4 mx-auto justify-center"
          noValidate
        >
          <Header title={"Edit Profile"}></Header>

          {/* image set for donor */}
<i className="text-lg text-rose-500">** Please reuplord your profile photo **</i>

          <div className="mx-auto relative w-[80px] h-[80px]">

            {/* notes */}



            {/* File Input with Label */}
            <label className="absolute bottom-0 right-0 cursor-pointer">
              {/* Hidden File Input */}
              <input
                type="file"
                name="image"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {/* Camera Icon */}
              <IoIosCamera className="text-neutral-700 text-2xl bg-neutral-300 rounded-full p-1" />
            </label>

            {/* Profile Picture */}
            <img
              className="rounded-full object-cover w-full h-full bg-red-300 p-[1.5px] border border-neutral-300"
              src={selectedImage}
              alt="Profile"
            />
          </div>
          {/* datas */}
          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">First Name</p>
              <input
                defaultValue={donor?.firstName}
                placeholder="Enter first name"
                type="text"
                required
                name="firstName"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Last Name</p>
              <input
                defaultValue={donor?.lastName}
                placeholder="Enter last name"
                type="text"
                required
                name="lastName"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>
          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Date Of Birth</p>
              <input
                defaultValue={donor?.dateOfBirth}
                placeholder="Enter your name"
                type="date"
                required
                name="dateOfBirth"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Current Location</p>
              <input
                defaultValue={donor?.currentLocation}
                placeholder="Enter your current location"
                type="text"
                required
                name="currentLocation"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Permanent Location</p>
              <input
                defaultValue={donor?.permanentLocation}
                placeholder="Enter your permanent location"
                type="text"
                required
                name="permanentLocation"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Blood Group</p>
              <input
                defaultValue={donor?.bloodGroup}
                placeholder="Enter your blood group"
                type="text"
                required
                name="bloodGroup"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Last Blood Donate Time</p>
              <input
                defaultValue={donor?.lastBloodDonateTime}
                type="date"
                required
                name="lastBloodDonateTime"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>

            <label className="w-full">
              <p className="text-lg font-semibold">Facebook Url</p>
              <input
                defaultValue={donor?.facebookUrl}
                placeholder="Enter your Facebook Url"
                type="text"
                required
                name="facebookUrl"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Whatsapp Url</p>
              <input
                defaultValue={donor?.whatsappUrl}
                placeholder="Enter your Whatsapp Url"
                type="text"
                required
                name="whatsappUrl"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Contact Number</p>
              <input
                defaultValue={donor?.contactNumber}
                placeholder="Enter your contact number"
                type="number"
                required
                name="contactNumber"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Blood Bank Affiliation</p>
              <input
                defaultValue={donor?.bloodBankAffiliation}
                placeholder="Enter your Blood Bank Affiliation"
                type="text"
                required
                name="bloodBankAffiliation"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Last Health Checkup</p>
              <input
                defaultValue={donor?.lastHealthCheckup}
                placeholder="Enter your Blood Bank Affiliation"
                type="date"
                required
                name="lastHealthCheckup"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">Gender</p>
              <select
                defaultValue={donor?.gender}
                name="gender"
                required
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Availability</p>
              <select
                defaultValue={donor?.availability}
                name="availability"
                required
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              >
                <option value="available">Available</option>
                <option value="not-available">Not Available</option>
              </select>
            </label>
          </div>

          <div className="flex items-center gap-5 justify-center">
            <label className="w-full">
              <p className="text-lg font-semibold">How Many Times Donate</p>
              <input
                defaultValue={donor?.howManyTimesDonate}
                placeholder="Enter how many time you donate"
                type="number"
                required
                name="howManyTimesDonate"
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              />
            </label>
            <label className="w-full">
              <p className="text-lg font-semibold">Emergency Availability</p>
              <select
                defaultValue={donor?.emergencyAvailability}
                name="emergencyAvailability"
                required
                className="w-full h-10 px-2 border-neutral-600 rounded-md border"
              >
                <option value={true}>Yes</option>
                <option value={false}>No</option>
              </select>
            </label>
          </div>

          <label className="w-full">
            <p className="text-lg font-semibold">Donation Motivation</p>
            <textarea
              defaultValue={donor?.donationMotivation}
              name="donationMotivation"
              placeholder="Why do you donate blood?"
              className="w-full h-20 px-2 border-neutral-600 rounded-md border"
            />
          </label>
          <div className="mx-auto">
            <Button>Register as a donor</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};
export default EditDonator;
