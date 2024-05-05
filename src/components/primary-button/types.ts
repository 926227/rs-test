import {ButtonProps} from '../generics/button/types';

export interface PrimaryButtonProps extends ButtonProps {
  size?: 'small' | 'medium' | 'big';
  type?: 'cancel' | 'submit';
}
