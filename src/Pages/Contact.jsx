import { useTranslation } from "react-i18next";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaSms } from "react-icons/fa";
import { toast } from "react-hot-toast";

import Button from "../Components/Button";
import Header from "../Components/Header";
import Container from "../Components/Container";
import { contactDetails } from "../apis/auth";

const Contact = () => {
  const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const name = e.target.name.value;
      const contactNumber = e.target.contactNumber.value;
      const email = e.target.email.value;
      const user = { name, contactNumber, email };

      const response = await contactDetails(user);
      console.log(response);

      toast.success(t("contact.toastMessage"));
      e.target.reset();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <div>
        <Header title={t("contact.title")} />

        <div className="md:flex items-center gap-5 mt-10 m-20">
          {/* Location, SMS, Email Section */}
          <div className="flex-1">
            <div className="py-3">
              <FaLocationDot className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                {t("contact.location")}
              </h4>
            </div>
            <div className="py-3">
              <FaSms className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                {t("contact.sms")}
              </h4>
            </div>
            <div className="py-3">
              <IoMdMail className="mx-auto text-rose-500 text-4xl my-3" />
              <h4 className="text-gray-700 text-xl text-center">
                {t("contact.email")}
              </h4>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1">
            <h2 className="text-3xl font-serif my-4">
              {t("contact.onlineContactTitle")}
            </h2>
            <form onSubmit={handleSubmit}>
              <label>
                <p className="text-lg font-semibold">
                  {t("contact.form.name")}
                </p>
                <input
                  placeholder={t("contact.form.namePlaceholder")}
                  type="text"
                  required
                  name="name"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">
                  {t("contact.form.email")}
                </p>
                <input
                  placeholder={t("contact.form.emailPlaceholder")}
                  type="email"
                  required
                  name="email"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <label>
                <p className="text-lg font-semibold">
                  {t("contact.form.contactNumber")}
                </p>
                <input
                  placeholder={t("contact.form.contactNumberPlaceholder")}
                  type="number"
                  required
                  name="contactNumber"
                  className="w-full h-10 px-2 border-neutral-600 rounded-md border"
                />
              </label>
              <div className="my-3">
                <Button>{t("contact.form.sendMessage")}</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
