import { useTranslation } from "react-i18next";
import Header from "../Components/Header";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen p-8">
      <header className="text-center mb-10">
        <Header title={t("headers.title")}></Header>
        <p className="text-lg">{t("headers.subtitle")}</p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* About Us Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">
            {t("sections.aboutUs.title")}
          </h2>
          {t("sections.aboutUs.content", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index} className="text-lg mt-4">
                {paragraph}
              </p>
            )
          )}
        </section>

        {/* What is Blood Section */}
        <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.whatIsBlood.title")}
          </h2>
          {t("sections.whatIsBlood.content", { returnObjects: true }).map(
            (paragraph, index) => (
              <p key={index} className="text-lg">
                {paragraph}
              </p>
            )
          )}
        </section>

        {/* What is Blood Donation Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.whatIsBloodDonation.title")}
          </h2>
          {t("sections.whatIsBloodDonation.content", {
            returnObjects: true,
          }).map((paragraph, index) => (
            <p key={index} className="text-lg">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Who Can Donate Blood Section */}
        <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.whoCanDonateBlood.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            {t("sections.whoCanDonateBlood.content", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Different Blood Groups Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.bloodGroups.title")}
          </h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-rose-300">
                {t("sections.bloodGroups.table.headers", {
                  returnObjects: true,
                }).map((header, index) => (
                  <th key={index} className="border border-gray-300 p-2">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {t("sections.bloodGroups.table.rows", {
                returnObjects: true,
              }).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
