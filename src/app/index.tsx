import React from 'react';

import {
  closeModal,
  selectModal,
  useAppDispatch,
  useAppSelector,
} from '@/redux';

import { Overview } from '@/app/pages';
import { Header, Modal } from '@/components';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isOpen, content } = useAppSelector(selectModal);

  const onCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Overview />
      </main>
      <Modal isOpen={isOpen} content={content} onClose={onCloseModal} />
    </div>
  );
};

export default App;
