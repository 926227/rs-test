import {ButtonProps} from './types';
import styles from './styles.module.css';

export const Button = (props: ButtonProps) => {
  return (
    <div
      className={`${styles.button}`}
      onClick={props.onKick}
    >
      {props.children}
    </div>
    
  );
};
