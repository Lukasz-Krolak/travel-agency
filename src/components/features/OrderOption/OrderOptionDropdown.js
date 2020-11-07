import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
//import pricing from '../../../data/pricing.json';
import { formatPrice } from '../../../utils/formatPrice.js';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => (
  <select
    className={styles.dropdown}
    value={currentValue}
    onChange={event => setOptionValue(event.currentTarget.value)}
  >
    {required ? '' : (
      <option key='null' value=''>---</option>
    )}
    {values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  </select>
);

OrderOptionDropdown.propTypes = {
  values:  PropTypes.object,
  required: PropTypes.boolean,
  currentValue: PropTypes.number,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDropdown;