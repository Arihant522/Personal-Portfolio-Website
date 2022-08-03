import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <form netifly>
        <label>Your Name*</label>
        <input type="text" name="name" required></input>
        <label>Email*</label>
        <input type="email" name="email" required></input>
        <label>Subject*</label>
        <input type="text" name="subject" required></input>
        <label>Message*</label>
        <textarea rows="6" placeholder="Enter Your Message" name="message" required/>
        <button className="btn" type="submit">Submit</button>
    </form>
  )
}

export default Form
