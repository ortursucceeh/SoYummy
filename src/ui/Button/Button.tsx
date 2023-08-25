import React from 'react';
import styles from './Button.module.scss';
import { ReactNode, ComponentProps } from 'react';

interface ButtonProps {
  shape: 'rect' | 'curv';
  color: 'green' | 'dark' | 'trans';
  children: string | ReactNode | ReactNode[];
  onClick?: () => void;
  className?: string;
  type?: 'submit' | 'reset' | 'button' | undefined;
  props?: Omit<ComponentProps<'button'>, 'type'> & { type: string };
}
const Button: React.FC<ButtonProps> = ({
  shape,
  color,
  children,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`${styles.btn} ${styles[shape]} ${styles[color]} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};
export default Button;
