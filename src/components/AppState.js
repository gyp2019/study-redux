import React from 'react';

const AppState = ({ light, counter, onToggle, onIncrement, onDecrement }) => (
  <div>
    <h2>App State</h2>

    <div>
      <p>
      {
        light ? (
          <span className="badge badge-pill badge-success">Success</span>
        ) : (
          <span className="badge badge-pill badge-danger">Danger</span>
        )
      }
      </p>
      <button onClick={onToggle} className="btn btn-primary">Toggle</button>
    </div>
    <div>
    <p>counter: { counter }</p>
      <button onClick={onIncrement} className="btn btn-primary">Increment</button>
      <button onClick={onDecrement} className="btn btn-primary">DEcrement</button>
    </div>
  </div>
);

export default AppState;
