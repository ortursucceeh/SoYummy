import React, { ComponentPropsWithoutRef, ReactNode } from 'react';
import styles from './Button.module.scss';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  shape: 'rect' | 'curv';
  color: 'green' | 'dark' | 'trans' | 'grey';
  children: string | ReactNode | ReactNode[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<ButtonProps> = ({ shape, color, children, onClick, className, ...rest }) => {
  return (
    <button
      {...rest}
      onClick={onClick}
      className={`${styles.btn} ${styles[shape]} ${styles[color]} ${className ? className : ''}`}
    >
      {children}
    </button>
  );
};
export default Button;
