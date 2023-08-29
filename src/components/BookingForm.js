import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required("Enter you name"),
  email: yup.string().required("Enter your email address"),
  telephone: yup.string().required("Enter your phone number").matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone Number must match (123) 456-7890 format"),
  guests: yup.number().required("Please specify the number of guests, per table"),
  date: yup.string().required("Enter the date and time")
})



const BookingForm = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      guests: 1,
    }
  })
  
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <div className="field">
            <label htmlFor="name">Full Name</label>
            <input type="text" placeholder="Joe Biden" name="name" {...register("name")}/>
            <span className="error-msg">{errors.name?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="joebiden@email.com" name="email" {...register("email")}/>
            <span className="error-msg">{errors.email?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="telephone">Telephone Number</label>
            <input type="tel" placeholder="(123) 456-7890" name="telephone" {...register("telephone")}/>
            <span className="error-msg">{errors.telephone?.message}</span>
          </div>

          <div className='field'>
              <label htmlFor="occasion" className="htmlfor">Occasion</label>
              <select name="occasion" className="name options" {...register("occasion")} >
                <option value="select">Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
          </div>

          <div className='field'>
              <label htmlFor="guests" className="">Number of Guests</label>
              <input type="number" placeholder="1"  name='guests' {...register("guests")} min="1" max="10"/>
              <span className="error-msg">{errors.guests?.message}</span>
          </div>

          <div className='field'>
              <label htmlFor="date" className="htmlfor">Date & Time</label>
              <input type="datetime-local" name="date" {...register("date")}/>
              <span className="error-msg">{errors.date?.message}</span>
          </div>
          <button className='btn reserve-btn' type="submit">Reserve</button>
        </fieldset>
    </form>
  )
}

export default BookingForm;