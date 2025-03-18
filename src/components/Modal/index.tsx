import React from 'react';
import cn from 'classnames';

import styles from './modal.module.scss';

interface Props {
  isOpen: boolean;
  content: React.ReactNode;
  onClose: () => void;
}

export const Modal: React.FC<Props> = ({ isOpen, content, onClose }) => {
  const handleKeyDown = React.useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleKeyDown]);

  return (
    <div className={cn(styles.component, { [styles.visible]: isOpen })}>
      <div className={styles.container}>
        <div className={styles.inner}>{content}</div>
      </div>
      <div className={styles.overlay} onClick={onClose} />
    </div>
  );
};
