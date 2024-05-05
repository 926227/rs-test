import {Button} from '../generics/button/Button';
import {PrimaryButtonProps} from './types';
import styles from './styles.module.css';

export const PrimaryButton = (props: PrimaryButtonProps) => {
  const onClick = () => {
    if (props.onKick) {
      props.onKick();
    }

    console.log('click in primary button');
  };

  const type = props.type === 'cancel' ? styles.cancel : styles.submit;

  return (
    <Button
      className={type + props.className}
      onKick={onClick}
    >
      {props.children}
    </Button>
  );
};
