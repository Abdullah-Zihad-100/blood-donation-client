/* eslint-disable react/prop-types */
import ReactStars from "react-rating-star-with-type";
const ReviewCard = ({ review }) => {

  return (
    <div className="shadow-md shadow-rose-200 p-4 rounded-lg">
      <img
        className="w-full object-cover rounded-md h-[350px] my-3"
        src={review?.image || "https://via.placeholder.com/350x150"}
        alt={`${review?.name || "Reviewer"}'s Review`}
      />
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img
            className="object-cover w-[50px] my-2 h-[50px] rounded-full"
            src={
              review?.profile ||
              "https://www.exscribe.com/wp-content/uploads/2021/08/placeholder-image-person-jpg.jpg"
            }
            alt={`${review?.name || "Reviewer"}'s Profile`}
          />
          <div className="text-start">
            <h4 className="text-xl font-semibold text-gray-600">
              {review?.name || "Anonymous"}
            </h4>
            <ReactStars size={20} value={review?.rating || 0} />
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Post Date: {review?.date || "Unknown"}
        </p>
      </div>
      <p className="text-gray-600 my-2">
        {review?.comment || "No comment provided."}
      </p>
      {/* {role?.role === "admin" && (
        <div className="mt-3" onClick={() => handleDelete(review?._id)}>
          <Button>Delete Review</Button>
        </div>
      )} */}
    </div>
  );
};

export default ReviewCard;
