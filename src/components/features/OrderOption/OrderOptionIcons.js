import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
//import { formatPrice } from '../../../utils/formatPrice.js';


const OrderOptionIcons = () => (

  <div className={styles.component}>
    <h3 className={styles.title}>OrderOptionCheckboxes</h3>
  </div>
);

// const OrderOptionIcons = ({values}) => (
//   <div className={styles.component}></div>
//   // mapowanie po values
//     {values.map(value => (
//       <div key={value.id} value={value.id} className={styles.icon}>
//         {value.name} ({formatPrice(value.price)})</div>
//     ))}
  

// );

OrderOptionIcons.propTypes = {
  values:  PropTypes.array,
  currentValue: PropTypes.string,
};

export default OrderOptionIcons;