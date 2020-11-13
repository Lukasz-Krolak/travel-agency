import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => (

  <div className={styles.checkboxes}>
    {values.map(value => (
      <label key={value.id} >
        <input
          name={value.name}
          type={'checkbox'}
          value={currentValue}
          onChange={event => setOptionValue(newValueSet(currentValue, value.id, event.currentTarget.checked))}>
          
        </input>
        &nbsp;{value.name} &nbsp; {value.price}$
        
      </label>
    ))
    }  
  </div>
);

OrderOptionCheckboxes.propTypes = {
  values:  PropTypes.array,
  currentValue: PropTypes.array,
  setOptionValue: PropTypes.func,
  price: PropTypes.string,
};

export default OrderOptionCheckboxes;