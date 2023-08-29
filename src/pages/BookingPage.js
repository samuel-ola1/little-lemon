import React from 'react'
import BookingForm from '../components/BookingForm';
import "./bookingpage.css";

const BookingPage = () => {
  return (
    <main className='res-container'>
      <div className="container">
        <div className="res-content">
            <div className="res-intro">
                <h2 className='title'>Experience the perfect balance of tradition and luxury.</h2>
                <p>At Little Lemon, we take great pride in providing our customers with the greatest luxurious experience with a touch of <em>tradition</em>.</p>
                <p>Book a table with us to share in this experience.</p>
            </div>
            <div className="form">
                <h1>Reserve a Table</h1>
                <p>Please fill in and submit form to book your reservation at Little Lemon.</p>
                <BookingForm />
            </div>
        </div>
      </div>
     
    </main>
  )
}

export default BookingPage;