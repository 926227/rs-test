import {FooterProps} from './types';
import styles from './styles.module.css';

export const Footer = (props: FooterProps) => {
  return (
    <footer className={styles.title}>
      <div>This is footer</div>
      <div>counter: {props.count}</div>
    </footer>
  );
};
