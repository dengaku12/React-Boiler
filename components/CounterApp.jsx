import { connect } from "react-redux";
import { INCREMENT, DECREMENT, increment } from '../actions';
import Counter from './Counter'

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: (value) => {
      dispatch(increment(value));
    },
    onDecrement: () => {
      dispatch({ type: DECREMENT });
    },
  };
};
const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterApp;