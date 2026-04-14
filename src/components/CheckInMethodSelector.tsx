import React from 'react';
import { Select } from 'antd';

const CheckInMethodSelector = () => {
  const methods = [
    { value: 'happy', label: 'Happy' },
    { value: 'sad', label: 'Sad' },
    { value: 'neutral', label: 'Neutral' }
  ];

  return (
    <Select placeholder="Select a check-in method">
      {methods.map(method => (
        <Select.Option key={method.value} value={method.value}>
          {method.label}
        </Select.Option>
      ))}
    </Select>
  );
};

export default CheckInMethodSelector;
