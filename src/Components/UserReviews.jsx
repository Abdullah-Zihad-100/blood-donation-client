import { useState } from "react";
import useReviews from "../Hooks/useReviews";
import { useKeenSlider } from "keen-slider/react";
import "./UserReviews.css";
import Header from "./Header";
import ReactStars from "react-rating-star-with-type";
import Container from "./Container";
import { useTranslation } from "react-i18next";

const UserReviews = () => {
  const [data, isLoading] = useReviews();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  if (isLoading) {
    return <div className="text-center text-lg">Loading reviews...</div>;
  }

  return (
    <Container>
      <Header title={t('userReview.header')} />
      {data?.length > 0 ? (
        <div className="navigation-wrapper my-10 lg:w-3/4 mx-auto">
          <div ref={sliderRef} className="keen-slider">
            {data?.slice(0, 10)?.map((review, index) => (
              <div
                key={index}
                className="keen-slider__slide w-full mx-auto text-center"
              >
                <img
                  src={review?.profile || "https://via.placeholder.com/100"}
                  className="rounded-full object-cover w-[100px] h-[100px] mx-auto"
                  alt={review?.name || "User"}
                />
                <h3 className="text-2xl mt-2">{review.name}</h3>
                <div className="mx-auto flex justify-center my-3">
                  <ReactStars size={35} value={review?.rating || 0} />
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
                disabled={currentSlide === 0}
              />
              <Arrow
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
          {loaded && instanceRef.current && (
            <div className="dots flex justify-center mt-4 space-x-2">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => (
                <button
                  key={idx}
                  onClick={() => instanceRef.current?.moveToIdx(idx)}
                  className={`dot ${
                    currentSlide === idx ? "active bg-rose-500" : "bg-gray-300"
                  } w-3 h-3 rounded-full`}
                ></button>
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-center text-3xl my-20">No reviews available.</p>
      )}
    </Container>
  );
};

function Arrow({ left, onClick, disabled }) {
  const disabledClass = disabled
    ? "arrow--disabled opacity-50 cursor-not-allowed"
    : "";
  return (
    <svg
      onClick={onClick}
      className={`arrow ${
        left ? "arrow--left" : "arrow--right"
      } ${disabledClass}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

export default UserReviews;
