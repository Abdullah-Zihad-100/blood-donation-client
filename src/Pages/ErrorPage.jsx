import { Link } from "react-router";
import errorPage from "../assets/errorPage.png";
import Button from "../Components/Button";
const ErrorPage = () => {
  return (
    <div className="my-48">
      <di className="flex justify-center items-center">
        <h1 className="lg:text-6xl sm:text-3xl text-center text-3xl">
          Page Not Found
        </h1>
        <img className="md:w-[400px] w-[200px]" src={errorPage} alt="" />
      </di>
      <div className="text-center my-10">
        <Link to={"/"}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
