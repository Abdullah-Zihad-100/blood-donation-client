import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./Carousel.css"
import slider2 from "../assets/slider 2.jpg"
import slider3 from "../assets/slider 3.jpg"
import slider4 from "../assets/slider 4.jpg"
import slider1 from "../assets/slider 6.jpg"
import Container from "./Container"
import { useEffect, useState } from "react"
const Carousel = () => {
  
    const [currentSlide, setCurrentSlide] = useState(0);
    const [sliderRef, instanceRef] = useKeenSlider({
      loop: true, // Enables looping
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setCurrentSlide(0);
      },
    });

    // Auto-slide function
    useEffect(() => {
      const interval = setInterval(() => {
        instanceRef.current?.next(); // Move to the next slide
      }, 3000); // 3-second interval

      return () => clearInterval(interval); // Clear interval on component unmount
    }, [instanceRef]);




    return (
      <Container>
        <div>
          <div ref={sliderRef} className="keen-slider rounded-lg lg:h-[680px]">
            <div className="keen-slider__slide number-slide5">
              <img
                className="w-full h-full  object-cover"
                src={slider1}
                alt="silder-1"
              />
            </div>
            <div className="keen-slider__slide number-slide1">
              <img
                className="w-full h-full  object-cover"
                src={slider2}
                alt="silder-2"
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
           
          </div>
        </div>
      </Container>
    );
}
export default Carousel;