"use client";

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../store/store';
import { RootState } from '../../store/store';

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;



