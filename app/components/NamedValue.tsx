import React from 'react';
import styles from './NamedValue.style.scss';

export const NamedValue = (props: NamedValueProps) => {
  const { name, value } = props;

  return (
    <div className={styles.data}>
      <p className="data__name">{name}</p>
      <p className="data__value">{value}</p>
    </div>
  );
};

export type NamedValueProps = {
  name: string;
  value: string;
};
