import Banner from "../Components/Banner";
import Carousel from "../Components/Carousel";
import DonateSection from "../Components/DonateSection";
import NetWork from "../Components/NetWork";
import Section from "../Components/Section";
import UserReviews from "../Components/UserReviews";

const Home = () => {
  return (
    <div>
      <Carousel/>
      <Section/>
      <Banner/>
      <DonateSection/>
      <NetWork/>
      <UserReviews/>
    </div>
  )
}
export default Home;