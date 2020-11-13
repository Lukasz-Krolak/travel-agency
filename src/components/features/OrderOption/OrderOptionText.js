import React from 'react';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <form className={styles.component}>
    <input
      className={styles.input} 
      type={'text'} 
      name="name" 
    />
    <input 
      className={styles.input}
      type="submit" 
      value="Send" 
    />
  </form>

);

export default OrderOptionText;