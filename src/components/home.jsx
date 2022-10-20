import { Select, Collapse } from "antd";
import GroupIcon from "../Group.svg";
import React from "react";
import { Input } from "antd";
import { useUserContext } from "../context/userContext";
import { Formik, Form, Field, FieldArray ,ErrorMessage } from 'formik';
const { Panel } = Collapse;


const { Option } = Select;
 

const Plan = () => {
  const { userData, setUserData } = useUserContext();


  const initialData={
    plan:'',
    email:'',
    number:'',
    address:'',
    address2:'',
    pincode:'',
    state:''

  }

 const handleSubmit=()=>{

 }
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
    <div className="plan-container">
      <h3>Choose your plan</h3>
      <p>Hello Anisha,</p>
      <p>
        Increase yours and your family's health insurance cover by ₹20 lakhs
        with Super top-up!
      </p>
      <Formik
            initialValues={initialData}
            onSubmit={handleSubmit}
            
            render={({ values,  dirty, isValid,touched}) => (
      <Form
      
      >
        <Collapse  className="plan-type">
          <Panel header="Plan Type" key="1" style={{ fontWeight: "500" }}>
            <Select
              showSearch
              placeholder="Select a plan"
              className="select-plan"
            
            >
              <Option value="One">
                <p>
                  Self <Group />
                </p>
              </Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
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
                <p>Personal email address</p>
                <Field name='email'
                type='text'
                />
                     
              </div>
              <div>
                <p>Mobile number</p>
                <Input />
              </div>
              <div>
                <p>Address line 01</p>
                <Input />
              </div>
              <div>
                <p>Address line 02</p>
                <Input />
              </div>
              <div>
                <p>Pincode</p>
                <Input />
              </div>
              <div>
                <p>State</p>
                <Input />
              </div>
            </div>
          </Panel>
        </Collapse>
      </Form>)}></Formik>
      
     
    </div>
  );
};

export default Plan;
