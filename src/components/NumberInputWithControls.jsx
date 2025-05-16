import React, { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

function NumberInputWithControls({ initialValue = 1, min = 1, max, onChange }) {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (max === undefined || value < max) {
      const newValue = value + 1;
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  const handleDecrement = () => {
    if (value > min) {
      const newValue = value - 1;
      setValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };
/*
  const handleChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue)) {
      let clampedValue = newValue;
      if (min !== undefined && newValue < min) {
        clampedValue = min;
      }
      if (max !== undefined && newValue > max) {
        clampedValue = max;
      }
      setValue(clampedValue);
      if (onChange) {
        onChange(clampedValue);
      }
    } else if (event.target.value === "") {
      setValue(""); // Permite limpiar el input
      if (onChange) {
        onChange("");
      }
    }
  };*/

  return (
    <InputGroup className="w-auto">
      <Button variant="outline-secondary" onClick={handleDecrement}>
        -
      </Button>
      <div style={{margin: "6px"}}>
      <b>{value}</b> 
      </div>
      <Button variant="outline-secondary" onClick={handleIncrement}>
        +
      </Button>
    </InputGroup>
  );
}

export default NumberInputWithControls;