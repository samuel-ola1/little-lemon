import React from 'react'

const BookingForm = () => {




  return (
    <form>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Joe Biden" name="name"/>
            <span>Errors</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="joebiden@email.com" name="email"/>
            <span>Errors</span>
          </div>
          <div className="field">
            <label htmlFor="telephone">Telephone Number</label>
            <input type="tel" placeholder="(123) 456-7890" name="telephone"/>
            <span>Errors</span>
          </div>

          <div className='field'>
              <label htmlFor="occasion" className="htmlfor">Occasion</label>
              <select name="occasion" className="name">
                <option value="select">Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
          </div>

          <div className='field'>
              <label htmlFor="guests" className="">Number of Guests</label>
              <input type="number" placeholder="guests"  name='guests'/>
              <span>Error</span>
          </div>

          <div className='field'>
              <label htmlFor="date" className="htmlfor">Date & Time</label>
              <input type="datetime-local" name="date" />
              <span>Error</span>
          </div>
          <button className='btn btn-primary'>Reserve</button>
        </fieldset>
    </form>
  )
}

export default BookingForm;