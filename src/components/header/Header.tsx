import {HeaderProps} from './types';
import styles from './styles.module.css';

export const Header = (props: HeaderProps) => {
  return (
    <div className={styles.title}>
      <div>name:</div>
      <div>{props.name}</div>
    </div>
  );
};
