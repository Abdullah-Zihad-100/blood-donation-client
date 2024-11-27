import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, gooleLogin } = useAuth();
  const from = location?.state?.from?.pathname || "/";

  const handleGoogle = async () => {
    try {
      const toastLoading = toast.loading("...Processing");
      await gooleLogin();
      navigate(from, { replace: true });
      toast.dismiss(toastLoading);
      toast.success("Success Login");
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log("Form submitted", { email, password });

    try {
      const toastLoading = toast.loading("...Processing");
      await loginUser(email, password);
      toast.dismiss(toastLoading);
      toast.success("Success Login");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-neutral-600 p-2">
        {/* Centered Title */}
        <h1 className="lg:text-5xl text-4xl mb-16 text-center mt-8">
          Login with us to avail all the features.
        </h1>

        <div className="md:flex justify-between gap-10 w-full max-w-5xl items-center md:flex-row-r ">
          {/* Email Registration Form */}
          <div className="flex-1 ">
            <form
              className="flex flex-col gap-y-4 w-3/4 mx-auto"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <h3 className="text-3xl">Login with Email</h3>
              <label>
                <p className="text-lg font-semibold">Email</p>
                <input
                  placeholder="Enter your email"
                  type="email"
                  required
                  name="email"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">Password</p>
                <input
                  placeholder="Enter a strong password"
                  type="password"
                  name="password"
                  required
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <p className="text-neutral-600">
                Don't have a account?{" "}
                <Link className="text-red-500" to={"/register"}>
                  Please Register
                </Link>
              </p>
              <Button>Register</Button>
            </form>
          </div>

          {/* Social Login */}
          <div className="flex-1 my-10 mx-auto w-3/4">
            <h2 className="text-3xl mb-5">
              Login with <br />
              Social Platforms
            </h2>
            <div className="sm:flex gap-3 space-y-3">
              {/* Google Button */}
              <div
                onClick={handleGoogle}
                className="bg-rose-500 flex items-center gap-3 p-4 rounded-[45px] cursor-pointer hover:shadow-lg"
                title="Register with Google"
              >
                <div className="p-2 rounded-full border">
                  <FaGoogle className="text-white text-lg" />
                </div>
                <p className="text-white">Google</p>
              </div>

              {/* LinkedIn Button */}
              <div
                className="bg-sky-600 flex items-center gap-3 p-3 rounded-[40px] cursor-pointer hover:shadow-lg"
                title="Register with LinkedIn"
              >
                <div className="p-1 rounded-full border">
                  <TiSocialLinkedin className="text-white text-2xl" />
                </div>
                <p className="text-white">LinkedIn</p>
              </div>

              {/* Facebook Button */}
              <div
                className="bg-blue-500 flex items-center gap-3 p-3 rounded-[35px] cursor-pointer hover:shadow-lg"
                title="Register with Facebook"
              >
                <div className="p-2 rounded-full border">
                  <FaFacebookF className="text-white text-2xl" />
                </div>
                <p className="text-white">Facebook</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Login;
