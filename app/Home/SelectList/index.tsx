import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowIcon, CustomSelect, Option, Select } from './styles';

const GenderSelection = () => {
  const [maritalStatus, setMaritalStatus] = useState('');

  return (
    <CustomSelect>
      <Select
        className='select-field'
        name='status'
        value={maritalStatus}
        onChange={(e) => setMaritalStatus(e.target.value)}
      >
        <Option value=''> - Select...</Option>
        <Option value='Single'>Single</Option>
        <Option value='Married'>Married</Option>
        <Option value='Divorced'>Divorced</Option>
        <Option value='Widowed'>Widowed</Option>
      </Select>
      <ArrowIcon />
    </CustomSelect>
  );
};

export default GenderSelection;
