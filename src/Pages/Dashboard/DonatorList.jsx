import { useQuery } from "@tanstack/react-query";
import { deleteDonor, getAllDonator, saveAsADonator } from "../../apis/auth";
import { TiDeleteOutline } from "react-icons/ti";
import Header from "../../Components/Header";
import toast from "react-hot-toast";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router";
import Loader from "../../Components/Loader";
const DonatorList = () => {

      const { data: donators, refetch,isLoading } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
          const res = await getAllDonator();
          return res;
        },
      });

  const handleDelete = async (id,email) => {
    const res = await deleteDonor(id);
    saveAsADonator(email)
    refetch();
    toast.success("Successfully Deleted Donor!");
    console.log(res);
  };
    if (isLoading) return <Loader />;

  return (
    <div>
      <Header title={"Manage Donator"}></Header>
      <div className="border m-5 rounded">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white  bg-rose-400">
              <th>Name</th>
              <th>Email</th>
              <th>Blood Group</th>
              <th>Availablity</th>
              <th>Profile</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {donators?.map((user) => (
              <tr key={user?._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-full h-12 w-12">
                        <img
                          className="object-cover"
                          src={user?.profilePhoto}
                          alt="user image"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {user?.firstName + " " + user?.lastName}
                      </div>
                      <div className="text-sm opacity-50">
                        {user?.currentLocation}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{user?.email}</td>
                <td className="font-semibold">{user?.bloodGroup}</td>
                <td className="font-semibold text-green-600">
                  {user?.availability}
                </td>
                <td className="mx-auto cursor-pointer">
                  <Link to={`/donators/details/${user?._id}`}>
                    <FaRegUserCircle
                      className="cursor-pointer"
                      size={22}
                      color="red"
                    />
                  </Link>
                </td>
                <td
                  onClick={() =>
                    document.getElementById(`my_modal_${user?._id}`).showModal()
                  }
                >
                  <TiDeleteOutline
                    className="cursor-pointer"
                    size={27}
                    color="red"
                  />
                  <dialog id={`my_modal_${user?._id}`} className="modal">
                    <div className="modal-box">
                      <h3 className="font-bold text-lg text-red-500">Alart</h3>
                      <p className="py-4">
                        Are you sure ? you delete your profile!
                      </p>

                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                        <button
                          onClick={() => {
                            handleDelete(user?._id, user?.email);
                            document
                              .getElementById(`my_modal_${user?._id}`)
                              .close();
                          }}
                          className="btn bg-rose-500 text-white"
                        >
                          Sure
                        </button>
                      </div>
                    </div>
                  </dialog>
                </td>
              </tr>
            ))}

            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default DonatorList;