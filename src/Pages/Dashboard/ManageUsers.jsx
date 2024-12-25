import { useQuery } from "@tanstack/react-query";
import { deleteUser, getAllUsers, updateUserRole } from "../../apis/auth";
import toast from "react-hot-toast";
import Header from "../../Components/Header";
import { TiDeleteOutline } from "react-icons/ti";
import Loader from "../../Components/Loader";

const ManageUsers = () => {
  const { data: users, refetch,isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await getAllUsers();
      return res;
    },
  });

  const handleDelete = async (id) => {
    const res = await deleteUser(id);
    refetch();
    toast.success("Successfully Deleted User!");
    console.log(res);
  };

  const handleUpdateRole = async (e, id) => {
    e.preventDefault();
    const role = e.target.role.value;
    console.log(id, role);
    const res = await updateUserRole(id, { role });
    console.log(res);
    toast.success("Role Updated Successfully!");
    refetch();
  };

  if (isLoading) return <Loader/>

  
  return (
    <div>
      <Header title={"All Users"}></Header>
      <div className="border m-5 rounded">
        <table className="table">
          <thead>
            <tr className="text-white bg-rose-400">
              <th>Email</th>
              <th>Role</th>
              <th>Update Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user?.email}</div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{user?.role}</td>

                {/* Update Role Button */}
                <td
                  className="cursor-pointer font-semibold btn mt-1"
                  onClick={() =>
                    document
                      .getElementById(`update_modal_${user?._id}`)
                      .showModal()
                  }
                >
                  Update
                </td>

                {/* Update Role Modal */}
                <dialog id={`update_modal_${user?._id}`} className="modal">
                  <div className="modal-box">
                    <h3 className="font-bold text-lg text-center text-gray-800 border-b pb-2 mb-4">
                      Update User Role
                    </h3>
                    <form
                      onSubmit={(e) => {
                        handleUpdateRole(e, user?._id);
                        document
                          .getElementById(`update_modal_${user?._id}`)
                          .close();
                      }}
                      className="flex flex-col items-center gap-4"
                    >
                      <label className="text-sm text-gray-600 font-medium">
                        Select a Role:
                      </label>
                      <select
                        name="role"
                        defaultValue={user?.role}
                        className="select select-bordered w-full max-w-xs"
                      >
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                      </select>

                      <div className="modal-action justify-center mt-6">
                        <button
                          type="button"
                          onClick={() =>
                            document
                              .getElementById(`update_modal_${user?._id}`)
                              .close()
                          }
                          className="btn btn-outline"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn bg-rose-500 hover:bg-rose-600 text-white"
                        >
                          Update Role
                        </button>
                      </div>
                    </form>
                  </div>
                </dialog>

                {/* Delete User Button */}
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
};

export default ManageUsers;
