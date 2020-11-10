import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ currentValue, setOptionValue}) => (
  <div className={styles.number}>
    {console.log('current',currentValue)}
    <input className={styles.inputSmall}
      type={'number'}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      
      min="limits.min"
      max="2"
    />
    
  </div>
);

OrderOptionNumber.propTypes = {
  values:  PropTypes.object,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
};

export default OrderOptionNumber;