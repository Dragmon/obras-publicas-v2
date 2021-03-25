import React from 'react';
import { Select } from 'antd';
import PropTypes from 'prop-types';

function DropDown(props) {
  const infoData = props.dataFilter;
  const { Option } = Select;
  console.log('dataFilter', infoData);

  /* function onChange(value) {
    console.log(`selected ${value}`);
  } */
  function handleChangeCoordination(option) {
    console.log('option', option);
    props.onChange(option);
  }

  return (
    <>
      <Select
        name='Option_Coordination'
        showSearch
        style={{ width: 200 }}
        placeholder='Select to option'
        optionFilterProp='children'
        onChange={handleChangeCoordination}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {infoData.map((dataSelect) => (
          <Option key={dataSelect.id} value={dataSelect.name}>
            {dataSelect.name}
          </Option>
        ))}
      </Select>
    </>
  );
}

DropDown.propTypes = {
  onChange: PropTypes.func,
  dataFilter: PropTypes.array,
};

export default DropDown;
