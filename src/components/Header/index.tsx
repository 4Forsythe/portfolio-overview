import React from 'react';

import { openModal, useAppDispatch } from '@/redux';
import { AddAssetForm, Button, Container, Heading } from '@/components';

import styles from './header.module.scss';

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  const onOpenModal = () => {
    dispatch(openModal({ component: <AddAssetForm /> }));
  };

  return (
    <Container>
      <header className={styles.component}>
        {/* Logo */}
        <Heading text='Portfolio Overview' />

        {/* Buttons */}
        <Button aria-label='Добавить новый актив' onClick={onOpenModal}>
          Добавить
        </Button>
      </header>
    </Container>
  );
};
