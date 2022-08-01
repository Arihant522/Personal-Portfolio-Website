import "./FormStyles.css"
import React from 'react'

const Form = () => {
  return (
    <form action="mailto:onnectwitharihant@gmail.com" method="post" enctype="text">
        <label>Your Name</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Subject</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Enter Your Message"/>
        <button className="btn" type="submit">Submit</button>
    </form>
  )
}

export default Form
