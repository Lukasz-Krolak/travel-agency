import React from 'react';
import styles from './OrderSummary.scss';
import { formatPrice } from '../../../utils/formatPrice.js';
import { calculateTotal } from '../../../utils/calculateTotal.js';

const OrderSummary =(tripCost, options) => (
  <div>
    {formatPrice(
      calculateTotal(tripCost, options)
    )}
    <h2 className={styles.component}>
   
          
      Total: <strong>$500</strong>
    </h2>
  </div>
);

export default OrderSummary;