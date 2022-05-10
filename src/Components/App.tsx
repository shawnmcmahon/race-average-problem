import React, { FunctionComponent } from 'react';
import Header from './Header';
import Results from './Results';
import TimeSubmit from './TimeSubmit';

const App:FunctionComponent = () => {
  return (
    <main className="w-100 h-screen bg-[#F6F7F7]">
      <Header />
      <TimeSubmit />
    </main>
  );
}

export default App;
