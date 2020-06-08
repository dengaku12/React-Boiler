import { connect } from "react-redux";
import { INCREMENT, DECREMENT, increment, CLEAR } from '../actions';
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
    onClear: () => {
        dispatch({type: CLEAR});
    }
  };
};
const CounterApp = connect(mapStateToProps, mapDispatchToProps)(Counter);
export default CounterApp;