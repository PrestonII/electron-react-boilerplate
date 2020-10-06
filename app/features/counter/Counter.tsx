import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Counter.css';
import routes from '../../constants/routes.json';
import {
  increment,
  decrement,
  incrementIfOdd,
  incrementAsync,
  selectCount,
} from './counter.slice';

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(selectCount);
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to={routes.HOME}>
          <h1>{'<'}</h1>
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {value}
      </div>
      <div className={styles.btnGroup}>
        {/* <Button
          intent="success"
          className={styles.btn}
          onClick={() => {
            dispatch(increment());
          }}
        >
          <i className="fa fa-plus" />
        </Button> */}
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(decrement());
          }}
          data-tclass="btn"
          type="button"
        >
          <i className="fa fa-minus" />
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(incrementIfOdd());
          }}
          data-tclass="btn"
          type="button"
        >
          odd
        </button>
        <button
          className={styles.btn}
          onClick={() => {
            dispatch(incrementAsync());
          }}
          data-tclass="btn"
          type="button"
        >
          async
        </button>
      </div>
    </div>
  );
}
