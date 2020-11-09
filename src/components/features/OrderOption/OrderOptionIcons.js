import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import Icon from '../../common/Icon/Icon.js';
import { formatPrice } from '../../../utils/formatPrice.js';

const OrderOptionIcons = ({values, currentValue, setOptionValue }) => (

  <div className={styles.component}>
    {/* mapowanie po value renderujace divy */}
    {values.map(value => (
      // aktywne lub nieaktywne 
      <div key={value.id} className={ styles.icon + ' ' + (currentValue === value.id ? styles.iconActive : styles.icon)}>
        {/* poszczególny wers */}
        <div key={value.id} value={value.id}  onClick= {() => setOptionValue(value.id)}>
          <Icon name={value.icon} />
          {value.name} ({formatPrice(value.price)})
        </div>
      </div>
    ))
    }
  </div>
);

OrderOptionIcons.propTypes = {
  values:  PropTypes.array,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;