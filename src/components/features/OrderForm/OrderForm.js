import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderForm.scss';
import {Grid, Row, Col} from 'react-flexbox-grid';

class OrderForm extends React.Component {
  render () {
    const {PageTitle, cost} = this.props;
    return (
      <div className={styles.component}>
        <Grid>
          <Row>
            <Col xs={12}>
              <PageTitle text='Trip options' />
              <OrderForm tripCost={cost} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
OrderForm.propTypes = {
  PageTitle: PropTypes.string,
  cost: PropTypes.string,
};
export default OrderForm;