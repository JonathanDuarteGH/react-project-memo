import React, { useState } from 'react';

const MemoDetails = (props) => {
  const [step, setStep] = useState({
    step: 1,
    company: '',
    position: '',
    city: '',
    email: '',
    userName: '',
    password: '',
    miscellaneous: ''
  });

  nextStep = () => {
    setStep(step + 1);
  }

  prevStep = () => {
    setStep(step - 1);
  }

  handleChange = input => e => {
    setStep({ [input]: e.target.value })
  }

  return (
    <div>

    </div>
  );

};

export default MemoDetails;