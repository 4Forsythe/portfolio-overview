import React from 'react';
import cn from 'classnames';

import styles from './button.module.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'sm' | 'md';
  variant?: 'contained' | 'outlined';
  isLoading?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  size = 'md',
  variant = 'contained',
  isLoading,
  disabled,
  ...rest
}) => {
  return (
    <button
      className={cn(styles.component, {
        [styles.sm]: size === 'sm',
        [styles.outlined]: variant === 'outlined',
        [styles.loading]: isLoading,
      })}
      disabled={isLoading || disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
