import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';

const reviews = [
  {
    id: 1,
    name: "John Doe",
    companyName: "ABC Corp",
    review: "This is a great product! I highly recommend it.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    companyName: "XYZ Inc",
    review: "I had a wonderful experience with this service.",
    rating: 4,
  },
  {
    id: 3,
    name: "Alice Johnson",
    companyName: "Tech Solutions",
    review: "The quality of the product is top-notch.",
    rating: 5,
  }]




const App = () => {

  // const fetchData = async () => {
  //   const response = await fetch('https://api.example.com/reviews')
  //   const data = await response.json()
  //   return data
  // }
  return (
    <>

      <h1>Customer Reviews</h1>

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
              <h2>{review.name}</h2>
              <h3>{review.companyName}</h3>
              <p>{review.review}</p>
              <p>Rating: {review.rating} stars</p>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
    </>


  )
}

export default App
