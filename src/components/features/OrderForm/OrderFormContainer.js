import { connect } from 'react-redux';
import OrderForm from './OrderForm';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux.js';


const mapStateToProps = state => {
  const options = getOrderOptions(state);
  return {
    options,
  }; 
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: newState => dispatch(setOrderOption(newState)),
});


export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);