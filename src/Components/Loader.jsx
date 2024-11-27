import imgBlood from "../assets/blood-donation.gif"
const Loader = () => {
    return (
      <div className="flex justify-center items-center my-60 w-full">
        <img src={imgBlood} className="w-32 bg-transparent" alt="" />
        <p className="text-2xl text-neutral-600 font-semibold ">Loadding...</p>
      </div>
    );
}
export default Loader;