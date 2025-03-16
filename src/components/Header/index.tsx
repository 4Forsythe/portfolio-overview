import React from 'react';
import { Button, Container, Heading } from '@/components';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  return (
    <Container>
      <header className={styles.component}>
        {/* Logo */}
        <Heading text='Portfolio Overview' />

        {/* Buttons */}
        <Button aria-label='Добавить новый актив'>Добавить</Button>
      </header>
    </Container>
  );
};
