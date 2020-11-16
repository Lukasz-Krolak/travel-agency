import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const OrderOptionNumber = ({ limits, price, currentValue, setOptionValue}) => (
  <div className={styles.number}>
    <input className={styles.inputSmall}
      type="number"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
      min={limits.min}
      max={limits.max}
    />
    <h5> Cost / person &nbsp;{price}</h5>
  </div>
);

OrderOptionNumber.propTypes = {
  values:  PropTypes.object,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
  limits: PropTypes.object,
  price: PropTypes.string,
};

export default OrderOptionNumber;