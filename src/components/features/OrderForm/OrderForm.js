import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
// import pricing from '../../../data/pricing.json';
// import OrderOption from '../OrderOption/OrderOption.js';

const OrderForm = ({tripCost, options}) => (
  
  console.log('options',tripCost, options),
  <div className={styles.component}>
    <Grid>
      <Row>
        <div>
          {/* {Object.keys(pricing).map(price =>( 
            <Col md={4} key={id}>
              <OrderOption>

              </OrderOption>
            </Col>
          ) */}
          {/* )} */}
        </div>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    </Grid>
  </div>
);

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  pricing: PropTypes.shape({id: PropTypes.string, price: PropTypes.string}),
};

export default OrderForm;