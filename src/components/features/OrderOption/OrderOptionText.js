import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';


const OrderOptionText = ({setOptionValue, currentValue }) => (
  <form className={styles.component}>
    <input
      className={styles.input} 
      type="text"
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </form>

);

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};
export default OrderOptionText;