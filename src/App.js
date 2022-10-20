import 'antd/dist/antd.min.css';
import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import BackIcon from './back.svg';
 import './App.css'
 import { UseContextProvider } from "./context/userContext";
import Plan from './components/plan';
import SecondScreen from './components/deduct';
import DeclarationScreen from './components/declaration';
import ReviewScreen from './components/Review';
import Congratulations from './components/Congratulations';
const { Step } = Steps;

const steps = [
  {
    title: 'First',
    content: <Plan/>,
  },
  {
    title: 'Second',
    content: <SecondScreen/>,
  },
  {
    title: 'Third',
    content: <DeclarationScreen/>,
  },
  {
    title: 'Review',
    content: <ReviewScreen/>,
  },
  {
    title: 'Done',
    content: <Congratulations/>,
  }
];
const App = () => {
  const [current, setCurrent] = useState(0);
 
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <div className='app'>
      <div className='container'>
        <div className='top-container'>
          {current > 0 && (
          <img src={BackIcon} className='img-icon'
        alt='back'
            onClick={() => prev()}
          />
          
        )}
      <Steps current={current} progressDot className='step'>
        {steps.map((item) => (
          <Step key={item.title} />
        ))}
      </Steps>
      </div>
      <UseContextProvider>
      <div className="steps-content">{steps[current].content}</div>
      </UseContextProvider>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button  className='btn' type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
    
      </div>
      </div>
    </div>
  );
};
export default App;