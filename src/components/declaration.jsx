import React from 'react'
import { Checkbox } from 'antd';
import { useUserContext } from "../context/userContext";
const DeclarationScreen = () => {
    
  const { userData, setUserData } = useUserContext();
  const onChangeCheck = (e) => {
    let value=e.target.checked
     setUserData({...userData,'isChecked':value})}
  return (
    <div className='box'>
        <h3 style={{marginLeft:'4rem'}}>Declaration</h3>

        <div className='checkbox-box'>
        <div className="checkbox-cont">
      <Checkbox onChange={onChangeCheck}></Checkbox>
      <p>I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.</p>
      </div>
      <div className="checkbox-cont">
      <Checkbox onChange={onChangeCheck}></Checkbox>
      <p>I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition..</p>
      </div>
      <div className="checkbox-cont">
      <Checkbox onChange={onChangeCheck}></Checkbox>
      <p>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)</p>
      </div>
      <div className="checkbox-cont">
      <Checkbox onChange={onChangeCheck}></Checkbox>
      <p>I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements).</p>
      </div>
        </div>
    </div>
  )
}

export default DeclarationScreen;