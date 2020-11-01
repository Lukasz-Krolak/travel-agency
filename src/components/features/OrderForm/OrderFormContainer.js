import {connect} from 'react-redux';
import { OrderForm } from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux.js';


const mapStateToProps = state => {
  const options = getOrderOptions(state);
  return {
    options,
  }; 
};
export default connect(mapStateToProps)(OrderForm);