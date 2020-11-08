import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = () => (

  <div className={styles.component}>
    <h3 className={styles.title}>OrderOptionNumber</h3>
  </div>
);

// const OrderOptionNumber = ({ currentValue, setOptionValue}) => (
//   <div 
//     className={styles.number}
//     type={'number'}
//     value={currentValue}
  
//     onChange={event => setOptionValue(event.currentTarget.value)}
//   >


//   </div>
// );

OrderOptionNumber.propTypes = {
  values:  PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;