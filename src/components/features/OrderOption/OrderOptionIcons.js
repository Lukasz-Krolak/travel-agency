import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice.js';


const OrderOptionIcons = ({values}) => (
  <div className={styles.component}
  // mapowanie po values
    {...values.map(value => (
      <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
    ))}
  >
    <div >
      <h3 className={styles.title}>OrderOptionIcons</h3>
    </div>
  </div>
);

OrderOptionIcons.propTypes = {
  values:  PropTypes.object,
};

export default OrderOptionIcons;