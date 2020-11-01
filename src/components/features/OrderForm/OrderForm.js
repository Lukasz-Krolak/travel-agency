import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';

const OrderForm = (options) => (
  <div className={styles.component}>
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={options}/>
        </Col>
      </Row>
    </Grid>
  </div>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
};

export default OrderForm;