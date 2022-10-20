import { Select, Collapse } from "antd";

import React, { useEffect }  from "react";
import { Input } from "antd";
import { useUserContext } from "../context/userContext";
import {  Form } from "antd";
import FormPreview from "./form-preview";
const { Panel } = Collapse;

const { Option } = Select;

const Plan = () => {
  const { userData, setUserData,error,setError } = useUserContext();
  
 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

  
  };


  useEffect(()=>{
if(!userData.plan || !userData.email ||!userData.number )
{ setError({...error,plan:'true'})
}
else{
  setError({...error,plan:'false'})
}
  },[userData])
 
   


  const onChange = (value) => {
    setUserData({ ...userData, "plan": value });


    
  };

 
  const Group = () => {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 20 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 15H7C3.6865 15 1 17.6865 1 21V22C1 22 4.125 23 10 23C15.875 23 19 22 19 22V21C19 17.6865 16.3135 15 13 15Z"
          fill="#B3E9DD"
          stroke="#2D3D54"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M5 6C5 3.2385 7.2385 1 10 1C12.7615 1 15 3.2385 15 6C15 8.7615 12.7615 12 10 12C7.2385 12 5 8.7615 5 6Z"
          fill="#F9C6B1"
          stroke="#2D3D54"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M10.0001 10.0879C11.4203 10.0879 12.5716 9.0252 12.5716 7.71429H7.42871C7.42871 9.0252 8.57998 10.0879 10.0001 10.0879Z"
          fill="#2D3D54"
        />
      </svg>
    );
  };
  return (
    <div className="main-container">
    <div className="plan-container">
      <h3>Choose your plan</h3>
      <p>Hello Anisha,</p>
      <p>
        Increase yours and your family's health insurance cover by ₹20 lakhs
        with Super top-up!
      </p>

      <Form 
    
        
      >
        <Collapse className="plan-type">
          <Panel header="Plan Type" key="1" style={{ fontWeight: "500" }}>
            <Select
              showSearch
              placeholder="Select a plan"
              className="select-plan"
              onChange={onChange}
              value={userData.plan}
            >
              <Option value="Self (individual)">
                <p>
                 <Group />   Self  <span className="cost">600</span>
                </p>
              </Option>
              <Option value="parent">
                <p>
                <Group />  Parent  <span className="cost">0</span>
                </p>
              </Option>
              <Option value="self and parent">
              <p>
                <Group />   Parent + self  <span className="cost">600</span>
                </p>
              </Option>
              <Option value="self ,spouse and kids">
              <p>
                <Group /> self + spouse + kids <span className="cost">1800</span>
                </p>
              </Option>
            </Select>
          </Panel>
        </Collapse>

        <Collapse className="personal-details plan-type">
          <Panel
            header="Basic Details (required)"
            style={{ fontWeight: "500" }}
          >
            <div className="personal-details-form">
              <div>
                <label>Personal email address</label>

                <Form.Item
                  name="email"
                  
                  initialValue={userData.email}
               
                  rules={[
                    {
                      required: true,
                      message: "Please input email!",
                    },
                  ]}
                >
                  <Input
                    name="email"
                    type="text"
                    value={userData.email}
                    required
                  
                    onChange={handleChange}
                  />
                </Form.Item>
              </div>
              <div>
                <label>Mobile number</label>
                <Form.Item
                  name="number"
                  initialValue={userData.number}
                  rules={[
                    {
                      required: true,
                      message: "Please input mobile number!",
                    },
                    {
                      max: 10,
                      message: "max length cannot be greater than 10",
                    },
                  ]}
                >
                  <Input
                    type="number"
                    required
                    name="number"
                    onChange={handleChange}
                  />
                </Form.Item>
              </div>
              <div>
                <label>Address line 01</label>
                <Form.Item
                  name="address01"
                  initialValue={userData.address1}
                  rules={[
                    {
                      required: true,
                      message: "Please add Address!",
                    }
                  ]}
                >
                <Input
                  type="text"
                  required
                  name="address1"
                  onChange={handleChange}
                />
                </Form.Item>
              </div>
              <div>
                <label>Address line 02</label>
                <Form.Item
                  name="address02"
                  initialValue={userData.address2}
                  rules={[
                    {
                      required: true,
                      message: "Please add Address!",
                    }
                  ]}
                >
                <Input
                  type="text"
               
                  name="address2"
                  onChange={handleChange}
                />
                </Form.Item>
              </div>
              <div>

                <label>Pincode</label>
                <Form.Item
                  name="pincode"
                  initialValue={userData.pincode}
                  rules={[
                    {
                      required: true,
                      message: "Please add pincode",
                    }
                  ]}
                >

                <Input
                  type="text"
                  required
                  name="pincode"
                  onChange={handleChange}
                />
                </Form.Item>
              </div>
              <div>
                <label>State</label>
                <Form.Item
                  name="state"
                  initialValue={userData.state}
                  rules={[
                    {
                      required: true,
                      message: "Please add State!",
                    }
                  ]}
                >
                <Input
                  type="text"
                  required
                  name="state"
                  value={userData["state"] || ""}
                  onChange={handleChange}
                />
                </Form.Item>
              </div>
            </div>
          </Panel>
        </Collapse>
      </Form>
    </div>
 <FormPreview/>
    </div>
  );
};

export default Plan;
