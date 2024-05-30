import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://trioeats-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="py-6 mons text-center my-6 rounded-xl mx-3 lg:mx-0">
        <h3 className="text-4xl mb-4 font-bold text-[#a14c43] mons">
          Customer Reviews
        </h3>
        <p className="lg:w-1/2 mx-auto">
          Share your dining experience by leaving reviews and ratings for food
          items, helping others choose the best dishes!
        </p>
      </div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-4 px-16 text-center">{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center w-full border-2">
        <button></button>
      </div>
    </div>
  );
};

export default Review;
