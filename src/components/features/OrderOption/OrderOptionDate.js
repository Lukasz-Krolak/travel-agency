import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
//import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';



const OrderOptionDate = () => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />
  );
};
  
OrderOptionDate.propTypes = {
  useState: PropTypes.func,
  selected: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
};

export default OrderOptionDate;