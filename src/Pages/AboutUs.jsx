import Header from "../Components/Header";

const AboutPage = () => {
  return (
    <div className=" min-h-screen p-8">
      <header className="text-center mb-10">
        <Header title={"About Us"}></Header>
        <p className="text-lg">
          Understanding the importance of blood donation
        </p>
      </header>

      <main className="max-w-5xl mx-auto space-y-12">
        {/* About Us Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-lg">
            Welcome to our blood donation platform, created as part of our
            college project. This initiative aims to bridge the gap between
            blood donors and those in need, providing a reliable and efficient
            way to save lives.
          </p>
          <p className="text-lg mt-4">
            Our website allows users to search for donors based on blood groups,
            access donor contact details, and connect with them directly for
            assistance. This platform empowers communities to help each other in
            times of medical emergencies by making blood donation faster and
            more accessible.
          </p>
          <p className="text-lg mt-4">
            Through this project, we also aim to raise awareness about the
            critical need for blood donation and encourage individuals to
            contribute to saving lives. Together, we can make a difference!
          </p>
        </section>

        {/* What is Blood Section */}
        <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">What is Blood?</h2>
          <p className="text-lg">
            Blood is a vital fluid in the human body that carries oxygen,
            nutrients, and hormones to tissues and organs while removing waste
            products. It consists of red blood cells, white blood cells,
            platelets, and plasma. Blood is essential for maintaining life and
            overall health.
          </p>
        </section>

        {/* What is Blood Donation Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is Blood Donation?
          </h2>
          <p className="text-lg">
            Blood donation is the process of voluntarily giving blood to help
            others in need. Donated blood is used in life-saving procedures,
            surgeries, and to treat patients with conditions like anemia or
            cancer. A single blood donation can save up to three lives.
          </p>
        </section>

        {/* Who Can Donate Blood Section */}
        <section className="bg-white text-gray-800 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Who Can Donate Blood?</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>Individuals aged 18 to 65 years old.</li>
            <li>Weighing at least 50 kg (110 lbs).</li>
            <li>
              In good general health and feeling well on the day of donation.
            </li>
            <li>
              Free of infections or medical conditions that could harm the
              recipient.
            </li>
            <li>Meeting specific guidelines set by health authorities.</li>
          </ul>
        </section>

        {/* Different Blood Groups Section */}
        <section className="text-white bg-rose-400 rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">
            Different Blood Groups
          </h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-rose-300">
                <th className="border border-gray-300 p-2">Blood Group</th>
                <th className="border border-gray-300 p-2">Can Donate To</th>
                <th className="border border-gray-300 p-2">Can Receive From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">A+</td>
                <td className="border border-gray-300 p-2">A+, AB+</td>
                <td className="border border-gray-300 p-2">A+, A-, O+, O-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">B+</td>
                <td className="border border-gray-300 p-2">B+, AB+</td>
                <td className="border border-gray-300 p-2">B+, B-, O+, O-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">O+</td>
                <td className="border border-gray-300 p-2">O+, A+, B+, AB+</td>
                <td className="border border-gray-300 p-2">O+, O-</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">AB+</td>
                <td className="border border-gray-300 p-2">AB+</td>
                <td className="border border-gray-300 p-2">
                  A+, B+, AB+, O+, A-, B-, AB-, O-
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">O-</td>
                <td className="border border-gray-300 p-2">All blood groups</td>
                <td className="border border-gray-300 p-2">O-</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
