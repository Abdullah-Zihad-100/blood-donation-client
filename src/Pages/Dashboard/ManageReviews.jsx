import toast from "react-hot-toast";
import { deleteReview } from "../../apis/auth";
import useReviews from "../../Hooks/useReviews";
import { TiDeleteOutline } from "react-icons/ti";
import ReactStars from "react-rating-star-with-type";

const ManageReviews = () => {
    const [data,refetch]=useReviews();

      const handleDelete = async (id) => {
        await deleteReview(id);
        refetch();
        toast.success("Delete Successfull");
      };


    return (
      <div>
        <div className="border m-5 rounded">
          <table className="table">
            <thead>
              <tr className="text-white bg-rose-400">
                <th>Profile</th>
                <th>Email</th>
                <th>Date</th>
                <th>Reting</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user) => (
                <tr key={user?._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <img src={user?.profile} className="w-[50px] h-[50px] rounded-full object-cover" alt="" />
                      <h4 className="text-xs text-gray-500">{user?.name}</h4>
                    </div>
                  </td>
                  <td>{user?.email}</td>
                  <td>
                    <ReactStars size={20} value={user?.rating || 0} />
                  </td>
                  <td>{user?.date}</td>
                  <td
                    className="cursor-pointer"
                    onClick={() =>
                      document
                        .getElementById(`delete_modal_${user?._id}`)
                        .showModal()
                    }
                  >
                    <TiDeleteOutline size={27} color="red" />
                  </td>

                  {/* Delete User Modal */}
                  <dialog id={`delete_modal_${user?._id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-red-500">Alert</h3>
                      <p className="py-4">
                        Are you sure you want to delete this user?
                      </p>
                      <div className="modal-action">
                        <button
                          type="button"
                          onClick={() =>
                            document
                              .getElementById(`delete_modal_${user?._id}`)
                              .close()
                          }
                          className="btn"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {
                            handleDelete(user?._id);
                            document
                              .getElementById(`delete_modal_${user?._id}`)
                              .close();
                          }}
                          className="btn bg-rose-500 text-white"
                        >
                          Sure
                        </button>
                      </div>
                    </div>
                  </dialog>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default ManageReviews;