
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css'; // Add styles there

const reviews = [
  {
    id: 1,
    name: "John Doe",
    companyName: "ABC Corp",
    review: "This is a great product! I highly recommend it.",
    rating: 5,
    image: "/download.jpg"
  },
  {
    id: 2,
    name: "Jane Smith",
    companyName: "XYZ Inc",
    review: "I had a wonderful experience with this service.",
    rating: 4,
    image: "/download.jpg"
  },
  {
    id: 3,
    name: "Alice Johnson",
    companyName: "Tech Solutions",
    review: "The quality of the product is top-notch.",
    rating: 5,
    image: "/download.jpg"
  }
];

const App = () => {
  return (
    <>
      <h1>Customer Reviews</h1>

      {/* Desktop View: Grid */}
      <div className="desktop-reviews">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={`${review.name}`} className="review-img" />
            <h2>{review.name}</h2>
            <h3>{review.companyName}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating} stars</p>
          </div>

        ))}
      </div>

      {/* Mobile View: Swiper */}
      <div className="mobile-reviews">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div key={review.id} className="review-card">
                <img src={review.image} alt={`${review.name}`} className="review-img" />
                <h2>{review.name}</h2>
                <h3>{review.companyName}</h3>
                <p>{review.review}</p>
                <p>Rating: {review.rating} stars</p>
              </div>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default App;




