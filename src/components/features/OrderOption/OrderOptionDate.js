import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';



const OrderOptionDate = ({setOptionValue, currentValue}) => {

  return (
    <DatePicker 
      selected={currentValue || new Date()} 
      onChange={date => setOptionValue(date)} 
    />
  );
};
  
OrderOptionDate.propTypes = {
  currentValue: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]),
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;