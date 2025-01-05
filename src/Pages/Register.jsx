import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { Link, useNavigate } from "react-router";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";
import { GetToken, saveUser } from "../apis/auth";
import { imgUplord } from "../apis/utils";
import { useTranslation } from "react-i18next";

const Register = () => {
  const { t } = useTranslation(); // Access translations
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
      toast.success("Login Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
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

    const toastLoading = toast.loading("...Processing");
    try {
      const userPhoto = await imgUplord(userUrl);
      const res = await createUser(email, password);
      await updateUserProfile(name, userPhoto);
      await GetToken(res?.user?.email);
      await saveUser(res?.user?.email);
      toast.dismiss(toastLoading);
      toast.success("Registration Successful");
      navigate(from, { replace: true });
    } catch (err) {
      console.error(err);
      toast.dismiss();
      toast.error(err.message);
    }
  };

  return (
    <Container>
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-neutral-600 p-2 my-8">
        <h1 className="lg:text-5xl text-4xl mb-16 text-center mt-8">
          {t("register.title")}
        </h1>

        <div className="md:flex justify-between gap-10 w-full max-w-5xl items-center">
          {/* Email Registration Form */}
          <div className="flex-1">
            <form
              className="flex flex-col gap-y-4 w-3/4 mx-auto"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <h3 className="text-3xl">
                {t("register.emailRegistration.heading")}
              </h3>
              <label>
                <p className="text-lg font-semibold">
                  {t("register.emailRegistration.nameLabel")}
                </p>
                <input
                  placeholder={t("register.emailRegistration.namePlaceholder")}
                  type="text"
                  required
                  name="name"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">
                  {t("register.emailRegistration.emailLabel")}
                </p>
                <input
                  placeholder={t("register.emailRegistration.emailPlaceholder")}
                  type="email"
                  required
                  name="email"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">
                  {t("register.emailRegistration.passwordLabel")}
                </p>
                <input
                  placeholder={t(
                    "register.emailRegistration.passwordPlaceholder"
                  )}
                  type="password"
                  required
                  name="password"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <input required type="file" name="image" />
              <p className="my-[-15px] text-rose-400">
                {t("register.emailRegistration.imageInstruction")}
              </p>
              <p className="text-neutral-600 mt-2">
                {t("register.emailRegistration.alreadyHaveAccount")}{" "}
                <Link className="text-red-500" to="/login">
                  {t("register.emailRegistration.loginLink")}
                </Link>
              </p>
              <Button>{t("register.emailRegistration.heading")}</Button>
            </form>
          </div>

          {/* Social Register */}
          <div className="flex-1 my-10 mx-auto w-3/4">
            <h2 className="text-3xl mb-5">
              {t("register.socialRegistration.heading")}
            </h2>
            <div className="sm:flex gap-3 space-y-3">
              <div
                onClick={handleGoogle}
                className="bg-rose-500 flex items-center gap-3 p-4 rounded-[45px] cursor-pointer hover:shadow-lg"
                title={t("register.socialRegistration.google")}
              >
                <div className="p-2 rounded-full border">
                  <FaGoogle className="text-white text-lg" />
                </div>
                <p className="text-white">
                  {t("register.socialRegistration.google")}
                </p>
              </div>

              <div
                className="bg-sky-600 flex items-center gap-3 p-3 rounded-[40px] cursor-pointer hover:shadow-lg"
                title={t("register.socialRegistration.linkedin")}
              >
                <div className="p-1 rounded-full border">
                  <TiSocialLinkedin className="text-white text-2xl" />
                </div>
                <p className="text-white">
                  {t("register.socialRegistration.linkedin")}
                </p>
              </div>

              <div
                className="bg-blue-500 flex items-center gap-3 p-3 rounded-[35px] cursor-pointer hover:shadow-lg"
                title={t("register.socialRegistration.facebook")}
              >
                <div className="p-2 rounded-full border">
                  <FaFacebookF className="text-white text-2xl" />
                </div>
                <p className="text-white">
                  {t("register.socialRegistration.facebook")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
