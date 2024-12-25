import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { GetToken, saveUser } from "../apis/auth";
import { imgUplord } from "../apis/utils";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, gooleLogin, updateUserProfile } = useAuth();
  const from = location.state?.from?.pathname || "/";

  const handleGoogle = async () => {
    try {
      const toastLoading = toast.loading("...Processing");
      const res = await gooleLogin();
      await saveUser(res?.user?.email);
      await GetToken(res?.user?.email);
      toast.dismiss(toastLoading);
      toast.success("Login Successfull");
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      toast.dismiss();
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const userUrl = form.image.files[0];
    console.log("Form submitted", { name, email, password });

    const toastLoading = toast.loading("...Processing");
    const userPhoto=await imgUplord(userUrl);

    try {
      const res = await createUser(email, password)
      updateUserProfile(name,userPhoto) 
      await GetToken(res?.user?.email);
      await saveUser(res?.user?.email);
      toast.dismiss(toastLoading);
      toast.success("Registation Successfull");
      navigate(from, { replace: true });
    } catch (err) {
      toast.dismiss()
      console.log(err);
      toast.error(err.message)

    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-neutral-600 p-2">
        {/* Centered Title */}
        <h1 className="lg:text-5xl text-4xl mb-16 text-center mt-8">
          Register with us to avail all the features.
        </h1>

        <div className="md:flex justify-between gap-10 w-full max-w-5xl items-center md:flex-row-r ">
          {/* Email Registration Form */}
          <div className="flex-1 ">
            <form
              className="flex flex-col gap-y-4 w-3/4 mx-auto"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <h3 className="text-3xl">Register with Email</h3>
              <label>
                <p className="text-lg font-semibold">Name</p>
                <input
                  placeholder="Enter your name"
                  type="name"
                  required
                  name="name"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
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
              <input type="file" name="image" id="" />
              <p className="text-neutral-600">
                Alreday have a account ?{" "}
                <Link className="text-red-500" to={"/login"}>
                  Please Login
                </Link>
              </p>
              <Button>Register</Button>
            </form>
          </div>

          {/* Social Register */}
          <div className="flex-1 my-10 mx-auto w-3/4">
            <h2 className="text-3xl mb-5">
              Register with <br />
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

export default Register;
