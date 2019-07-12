import { connect } from 'react-redux';
import { toggleSwtich, increment, decrement } from '../actions';
import AppState from '../components/AppState';

const mapStateToPros = (state, ownProps) => ({
  counter: state.counter,
  light: state.light,
});

const mapDispathToProps = (dispatch, ownProps) => ({
  onToggle: () => dispatch(toggleSwtich()),
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement()),
});

export default connect(
  mapStateToPros,
  mapDispathToProps,
)(AppState);
