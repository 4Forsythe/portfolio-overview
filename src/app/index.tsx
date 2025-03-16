import React from 'react';

import { Header } from '@/components';
import { Overview } from '@/app/pages';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <main className='main'>
        <Overview />
      </main>
    </div>
  );
};

export default App;
