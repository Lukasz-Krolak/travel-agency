import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice.js';
import { calculateTotal } from '../../../utils/calculateTotal.js';

const OrderSummary =({tripCost, options}) => (
  <div>
    <h2 className={styles.component}>  
      Total:
      {formatPrice(
        calculateTotal(tripCost, options)
      )}
    </h2>
  </div>
);
OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};
export default OrderSummary;