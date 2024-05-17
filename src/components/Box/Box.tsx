import {Children, FC, ReactNode} from 'react';
import styles from './styles.module.css';

interface Props {
  children: ReactNode;
}

export const Box = ({children}: Props) => {
  return <div className={styles.box}>{children}</div>;
};
