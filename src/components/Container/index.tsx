import React from 'react';
import cn from 'classnames';

import styles from './container.module.scss';

interface Props {
  className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
}) => {
  return <div className={cn(styles.component, className)}>{children}</div>;
};
