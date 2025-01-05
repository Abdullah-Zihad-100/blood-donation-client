import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { GetToken, saveUser } from "../apis/auth";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Login = () => {
  const { t } = useTranslation(); // Translation hook
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const location = useLocation();
  const { loginUser, gooleLogin, forgetPass } = useAuth();
  const from = location?.state?.from?.pathname || "/";

  const handelResetPass = async () => {
    if (!email) {
         toast.error("Please enter your email to reset the password.");
      return;
    }
    try {
      await forgetPass(email);
      toast.success(t("loginPage.resetPasswordSuccess"));
    } catch (err) {
      console.log(err);
       toast.error("Error sending reset email.");
    }
  };

  const handleGoogle = async () => {
    try {
     const toastLoading = toast.loading("...Processing");
      const res = await gooleLogin();
      await GetToken(res?.user?.email);
      await saveUser(res?.user?.email);
      navigate(from, { replace: true });
          toast.dismiss(toastLoading);
          toast.success("Success Login");
    } catch (err) {
      toast.dismiss();
      console.log(err);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const password = form.password.value;
    try {
  const toastLoading = toast.loading("...Processing");
      const res = await loginUser(email, password);
      await GetToken(res?.user?.email);
    toast.dismiss(toastLoading);
    toast.success("Success Login");
    navigate(from, { replace: true });
    } catch (err) {
         toast.dismiss();
         toast.error(
           err.response?.data?.message || "Login failed. Please try again."
         );
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-neutral-600 p-2">
        {/* Centered Title */}
        <h1 className="lg:text-5xl text-4xl mb-16 text-center mt-8">
          {t("loginPage.title")}
        </h1>

        <div className="md:flex justify-between gap-10 w-full max-w-5xl items-center md:flex-row-r">
          {/* Email Registration Form */}
          <div className="flex-1">
            <form
              className="flex flex-col gap-y-4 w-3/4 mx-auto"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <h3 className="text-3xl">{t("loginPage.emailLoginTitle")}</h3>
              <label>
                <p className="text-lg font-semibold">
                  {t("loginPage.emailLabel")}
                </p>
                <input
                  placeholder={t("loginPage.emailPlaceholder")}
                  type="email"
                  required
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">
                  {t("loginPage.passwordLabel")}
                </p>
                <input
                  placeholder={t("loginPage.passwordPlaceholder")}
                  type="password"
                  name="password"
                  required
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <p
                onClick={handelResetPass}
                className="text-xs text-red-500 mt-[-12px] cursor-pointer"
              >
                {t("loginPage.forgetPassword")}
              </p>
              <p className="text-neutral-600">
                {t("loginPage.noAccount")}{" "}
                <Link className="text-red-500" to={"/register"}>
                  {t("loginPage.registerNow")}
                </Link>
              </p>
              <Button>{t("loginPage.loginButton")}</Button>
            </form>
          </div>

          {/* Social Login */}
          <div className="flex-1 my-10 mx-auto w-3/4">
            <h2 className="text-3xl mb-5">{t("loginPage.socialLoginTitle")}</h2>
            <div className="sm:flex gap-3 space-y-3">
              {/* Google Button */}
              <div
                onClick={handleGoogle}
                className="bg-rose-500 flex items-center gap-3 p-3 rounded-[40px] cursor-pointer hover:shadow-lg"
                title={t("loginPage.googleTitle")}
              >
                <div className="p-2 rounded-full border">
                  <FaGoogle className="text-white text-lg" />
                </div>
                <p className="text-white">{t("loginPage.googleLogin")}</p>
              </div>

              {/* LinkedIn Button */}
              <div
                className="bg-sky-600 flex items-center gap-3 p-3 rounded-[40px] cursor-pointer hover:shadow-lg"
                title={t("loginPage.linkedInTitle")}
              >
                <div className="p-1 rounded-full border">
                  <TiSocialLinkedin className="text-white text-2xl" />
                </div>
                <p className="text-white">{t("loginPage.linkedInLogin")}</p>
              </div>

              {/* Facebook Button */}
              <div
                className="bg-blue-500 flex items-center gap-3 p-3 rounded-[35px] cursor-pointer hover:shadow-lg"
                title={t("loginPage.facebookTitle")}
              >
                <div className="p-2 rounded-full border">
                  <FaFacebookF className="text-white text-2xl" />
                </div>
                <p className="text-white">{t("loginPage.facebookLogin")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
