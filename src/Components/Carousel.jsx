import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Carousel.css"
import slider2 from "../assets/slider 2.jpg"
import slider3 from "../assets/slider 3.jpg"
import slider4 from "../assets/slider 4.jpg"
import slider5 from "../assets/slider 5.jpg"
import Container from "./Container"
const Carousel = () => {
    const [sliderRef] = useKeenSlider()
    return (
      <Container>
        <div>
          <div ref={sliderRef} className="keen-slider rounded-lg">
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full  object-cover"
                src={slider2}
                alt="silder-1"
              />
            </div>
            <div className="keen-slider__slide number-slide2">
              <img
                className="w-full h-full  object-cover"
                src={slider3}
                alt="silder-1"
              />
            </div>
            <div className="keen-slider__slide number-slide3">
              <img
                className="w-full h-full  object-cover"
                src={slider4}
                alt="silder-4"
              />
            </div>
            <div className="keen-slider__slide number-slide4">
              <img
                className="w-full h-full object-cover"
                src={slider5}
                alt="silder-5"
              />
            </div>
          </div>
        </div>
      </Container>
    );
}
export default Carousel;