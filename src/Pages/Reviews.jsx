import { AddReview } from "../apis/auth";
import Header from "../Components/Header";
import ReviewCard from "../Components/ReviewCard";
import ReactStars from "react-rating-star-with-type";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { useState } from "react";
import { IoIosCamera } from "react-icons/io";
import { imgUplord } from "../apis/utils";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";
import useReviews from "../Hooks/useReviews";
const Reviews = () => {
  const [data, isLoading, refetch] = useReviews();
  const { user } = useAuth();
  const [selectedImage, setSelectedImage] = useState(
    "https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI="
  );

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

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

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      document.getElementById(`update_modal_1`).close();
      const toastLoading = toast.loading("...Processing");
      const photo = e.target.image.files[0];
      const date = new Date().toISOString().split("T")[0];
      const image = await imgUplord(photo);
      const review = {
        rating,
        comment,
        date,
        image,
        email: user?.email,
        profile: user?.photoURL,
        name: user?.displayName,
      };
      refetch();
      await AddReview(review);
      setRating(0)
      setSelectedImage("https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?s=612x612&w=0&k=20&c=qRydgCNlE44OUSSoz5XadsH7WCkU59-l-dwrvZzhXsI=")
      toast.dismiss(toastLoading);
      toast.success("Successfully Post Review");
      e.target.reset();
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error("Failed to post review. Please try again.");
    }
  };

  if (isLoading) return <Loader />;

  return (
    <Container>
      <Header title={"users reviews"} />

      <div className="ms-3">
        <Button>
          <button
            onClick={() =>
              document.getElementById(`update_modal_1`).showModal()
            }
          >
            Add a review
          </button>
        </Button>
      </div>

      {/* Update Role Modal */}
      <dialog id={`update_modal_1`} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center text-gray-800 border-b pb-2 mb-4">
            Add a review
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-4"
          >
            <div className="">
              <div className="mx-auto relative w-[80px] h-[80px]">
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
                  <IoIosCamera className="text-neutral-700 text-2xl bg-neutral-300 rounded-full p-1" />
                </label>

                {/* Profile Picture */}
                <img
                  className="rounded-full object-cover w-full h-full  p-[1.5px] border border-neutral-300"
                  src={selectedImage}
                  alt="Profile"
                />
              </div>
              <div className="flex justify-center my-2">
                <ReactStars
                  onChange={(value) => setRating(value)}
                  size={40}
                  isEdit={true}
                  value={rating}
                />
              </div>

              <label className="w-full">
                <p className="text-lg font-semibold">Message</p>
                <textarea
                  onChange={(e) => {
                    setComment(e.target.value);
                  }}
                  placeholder="enter your comment"
                  type="text"
                  required
                  name="comment"
                  className="w-[400px] h-[100px] p-1 rounded-md border border-gray-400 outline-none"
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
                type="submit"
                className="btn bg-rose-500 hover:bg-rose-600 text-white"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {data?.length < 1 ? (
        <p className="text-3xl text-center my-56">No Review Added</p>
      ) : (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 p-3 mx-auto">
          {data?.map((review) => (
            <ReviewCard review={review} key={review?._id} />
          ))}
        </div>
      )}
    </Container>
  );
};
export default Reviews;
