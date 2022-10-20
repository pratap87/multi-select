import React from 'react'
import { useUserContext } from "../context/userContext";
const ReviewScreen = () => {
    const { userData, setUserData } = useUserContext();

  return (
    <div className='box'>
        <h3>Review and confirm payment</h3>
        <div className='review-box'>
            <div className='left-box'>
            <span>Plan Selected</span>  
            <span> Mobile Number </span> 
            <span>Deductible Amount</span> 
            <span>Pincode </span> 
            <span>State</span>
            </div>
            <div className='right-box'>
            <h5>{userData.plan}</h5>  
            <h5> {userData.number}</h5> 
            <h5>₹{userData.money}</h5> 
            <h5>{userData.pincode}</h5> 
            <h5>{userData.state}</h5>
            </div>
        </div>
    </div>
  )
}

export default ReviewScreen