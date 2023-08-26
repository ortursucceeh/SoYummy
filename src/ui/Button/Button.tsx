import React from 'react';
import styles from './Button.module.scss';
import { ReactNode, ComponentProps } from 'react';

interface ButtonProps {
  shape: 'rect' | 'curv';
  color: 'green' | 'dark' | 'trans' | 'grey';
  children: string | ReactNode | ReactNode[];
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
  disabled?: boolean;
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
