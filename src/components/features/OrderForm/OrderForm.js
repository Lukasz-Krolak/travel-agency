import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary.js';
import { calculateTotal } from '../../../utils/calculateTotal.js';

const OrderForm = (total) => (
  console.log('options',total),
  <div className={styles.component}>
    <Grid>
      <Row>
        <Col xs={12}>
          <OrderSummary tripCost={calculateTotal}/>
        </Col>
      </Row>
    </Grid>
  </div>
);

OrderForm.propTypes = {
  cost: PropTypes.string,
};

export default OrderForm;