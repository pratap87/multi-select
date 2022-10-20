import React from 'react'
import { useUserContext } from "../context/userContext";
const FormPreview = () => {
    const { userData, setUserData } = useUserContext();
  return (
    <div className="form-preview">
    <h3>Form Preview</h3>
    <h5>Email Address   -- {userData.email}</h5>
    <h5>Mobile Number   -- {userData.number}</h5>
    <h5>Address line 1   -- {userData.address1}</h5>
    <h5>Address line 2   -- {userData.address2}</h5>
    <h5>Pincode  -- {userData.pincode}</h5>
    <h5>State  -- {userData.state}</h5>
  </div>
  )
}

export default FormPreview