import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required("Enter you name"),
  email: yup.string().required("Enter your email address"),
  telephone: yup.string().required("Enter your phone number").matches(/^\(\d{3}\) \d{3}-\d{4}$/, "Phone Number must match (123) 456-7890 format"),
  guests: yup.number().min(1, "There must be at least one guest!").required("Please specify the number of guests, per table"),
  date: yup.string().required("Enter the date and time")
})



const BookingForm = () => {

  const { handleSubmit, register, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
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
            <span>{errors.name?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="email">Email Address</label>
            <input type="email" placeholder="joebiden@email.com" name="email" {...register("email")}/>
            <span>{errors.email?.message}</span>
          </div>
          <div className="field">
            <label htmlFor="telephone">Telephone Number</label>
            <input type="tel" placeholder="(123) 456-7890" name="telephone" {...register("telephone")}/>
            <span>{errors.telephone?.message}</span>
          </div>

          <div className='field'>
              <label htmlFor="occasion" className="htmlfor">Occasion</label>
              <select name="occasion" className="name" {...register("occasion")}>
                <option value="select">Select Occasion</option>
                <option value="birthday">Birthday</option>
                <option value="engagement">Engagement</option>
                <option value="anniversary">Anniversary</option>
              </select>
          </div>

          <div className='field'>
              <label htmlFor="guests" className="">Number of Guests</label>
              <input type="number" placeholder="guests"  name='guests' {...register("guests")} min="1" max="10"/>
              <span>{errors.guests?.message}</span>
          </div>

          <div className='field'>
              <label htmlFor="date" className="htmlfor">Date & Time</label>
              <input type="datetime-local" name="date" {...register("date")}/>
              <span>{errors.date?.message}</span>
          </div>
          <button className='btn' type="submit">Reserve</button>
        </fieldset>
    </form>
  )
}

export default BookingForm;