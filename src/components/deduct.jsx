import React from "react";
import { useUserContext } from "../context/userContext";
import { Input, Slider } from "antd";
import UserIcon from '../user.svg'
import { Checkbox } from 'antd'
 

const marks = {
  1: "₹1L",
  25: "₹2L",
  50: "₹3L",
  100: {
    style: {
      color: "#f50",
    },
    label: "₹5L"
  },
};

const SecondScreen = () => {
  const { userData, setUserData } = useUserContext();

  const onChangeCheck = (e) => {
    let value=e.target.checked
     setUserData({...userData,['isChecked']:value})}

const onChange=(value)=>{
    
switch(value){
    case 25:
        setUserData({...userData,['money']:200000})
        break;
    case 50:    
    setUserData({...userData,['money']:300000})
    break;
    case 100:
        setUserData({...userData,['money']:500000})
        break;
    default :
    setUserData({...userData,['money']:100000})


}

}

  return (
    <div className="plan-container">
      <h3>Select your deductible amount</h3>
      <p>
        Select the deductible amount for the policy (or policies) below. (what
        is a deductible?){" "}
      </p>
<div className="slider-container">
    <h4 style={{fontWeight:'bolder'}}>{userData.plan}</h4>
    <div className="prof">
 
    <img src={UserIcon} alt='profile'/><h6>John doe</h6>
    </div>
    <h4>Sum insured of ₹20,00,000 with a deductible of ₹{userData.money}</h4>
      <Slider
        onChange={onChange}
        marks={marks}
        trackStyle={{backgroundColor:'#D44C46'}}
        step={25}
        tooltip={{ formatter: null }}
      />
      </div>
<div className="checkbox-cont">
      <Checkbox onChange={onChangeCheck}></Checkbox>
      <p>I understand that this insurance will not be utilized until ₹{userData.money} (deductible) is exhausted.</p>
      </div>
    </div>
  );
};

export default SecondScreen;
