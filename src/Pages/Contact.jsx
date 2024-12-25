import Button from "../Components/Button";
import Header from "../Components/Header";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSms } from "react-icons/fa";
import Container from "../Components/Container";
import { contactDetails } from "../apis/auth";
import { toast } from "react-hot-toast";
const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = e.target.name.value;
      const contactNumber = e.target.contactNumber.value;
      const email = e.target.email.value;
      const user = { name, contactNumber, email };
      console.log(user);

      // Directly get the data from contactDetails
      const response = await contactDetails(user);
      console.log(response); // Log the actual response

      toast.success("Send Email Successful");
      e.target.reset();
    } catch (err) {
      console.error(err); // Use console.error for better debugging
    }
  };

  return (
    <Container>
      <div className="">
        <Header title={"Contact With Us"} />

        <div className="md:flex items-center gap-5 mt-10 m-20">
          {/* first div */}
          <div className="flex-1">
            <div className="py-3">
              <FaLocationDot className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                Feni sodor, academy road, Compact polytechnic institute
              </h4>
            </div>
            <div className="py-3">
              <FaSms className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                01XXXXXXXX (Only SMS)
              </h4>
            </div>
            <div className="py-3">
              <IoMdMail className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                cpiblooddonation@gmail.com
              </h4>
            </div>
          </div>

          {/* secend div */}
          <div className="flex-1">
            <h2 className="text-3xl font-serif my-4">Contact Us Online</h2>
            <form className="" onSubmit={handleSubmit}>
              <label className="w-full my">
                <p className="text-lg font-semibold">Name</p>
                <input
                  placeholder="Enter your name"
                  type="text"
                  required
                  name="name"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label className="w-full">
                <p className="text-lg font-semibold">Email</p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  required
                  name="email"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label className="w-full">
                <p className="text-lg font-semibold">Contact Number</p>
                <input
                  placeholder="Enter your contact number"
                  type="number"
                  required
                  name="contactNumber"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <div className="my-3">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
