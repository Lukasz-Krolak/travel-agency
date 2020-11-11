import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
//import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';



const OrderOptionDate =({setOptionValue}) => {


  const [startDate, setStartDate] = setOptionValue(new Date());
  return (
    <DatePicker 
      selected={startDate} 
      onChange={date => setStartDate(date)} 
    />
  );
};
  
OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  selected: PropTypes.instanceOf(Date),
  startDate: PropTypes.instanceOf(Date),
};

export default OrderOptionDate;