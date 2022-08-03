import "./Coding-ProfileStyles.css";
import React from 'react'
import {SiLeetcode,SiGeeksforgeeks} from "react-icons/si"
import {FaHackerrank} from "react-icons/fa"
function aboutdescribe() {
  return (
    <div className="coding-profile">
        <h1 className="heading coding-profile-heading">CODING PROFILES</h1>
        <div className="each-profile">
          <div className="each-profile-linker">
         <SiLeetcode size={50} className="icon"/>
         <a href="https://leetcode.com/Arihant_123jain-/" rel="noopener" target="_blank" className="profile-heading">Leetcode</a>
         </div>
         </div>

         <div className="each-profile">
         <div className="each-profile-linker">
         <SiGeeksforgeeks size={50} className="icon"/>
         <a href="https://auth.geeksforgeeks.org/user/arjain020502/practice" rel="noopener" target="_blank" className="profile-heading">GeeksForGeeks</a>
         </div>
         </div>

         <div className="each-profile">
         <div className="each-profile-linker">
         <FaHackerrank size={50} className="icon"/>
         <a href="https://www.hackerrank.com/arjain020502" rel="noopener" target="_blank" className="profile-heading">Hackerrank</a>
         </div>
         </div>
    </div>
  )
}

export default aboutdescribe
