import React from 'react';
import cn from 'classnames';

import styles from './form-field.module.scss';

interface Props
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md';
}

export const FormField = React.forwardRef<HTMLInputElement, Props>(
  ({ size = 'md', ...rest }, ref) => {
    return (
      <div className={cn(styles.component, { [styles.sm]: size === 'sm' })}>
        <input
          className={styles.input}
          ref={ref}
          autoComplete='off'
          {...rest}
        />
      </div>
    );
  }
);

FormField.displayName = 'FormField';
