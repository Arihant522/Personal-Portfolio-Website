import "./Coding-ProfileStyles.css";
import React from 'react'
import {SiLeetcode,SiGeeksforgeeks} from "react-icons/si"
import {FaHackerrank} from "react-icons/fa"
function aboutdescribe() {
  return (
    <div className="coding-profile">
        <h1 className="heading coding-profile-heading">CODING PROFILES</h1>
        <div className="each-profile">
         <SiLeetcode size={50} style={{color:"white"}}/>
         <a href="https://leetcode.com/Arihant_123jain-/" rel="noopener" target="_blank" className="profile-heading">Leetcode</a>
         </div>

         <div className="each-profile">
         <SiGeeksforgeeks size={50} style={{color:"white"}}/>
         <a href="https://auth.geeksforgeeks.org/user/arjain020502/practice" rel="noopener" target="_blank" className="profile-heading">GeeksForGeeks</a>
         </div>

         <div className="each-profile">
         <FaHackerrank size={50} style={{color:"white"}}/>
         <a href="https://www.hackerrank.com/arjain020502" rel="noopener" target="_blank" className="profile-heading">Hackerrank</a>
         </div>
    </div>
  )
}

export default aboutdescribe
