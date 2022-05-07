import React, { FunctionComponent } from 'react';
import Header from './Header';
import Results from './Results';
import TimeSubmit from './TimeSubmit';

const App:FunctionComponent = () => {
  return (
    <main className="">
      <Header />
      <TimeSubmit />
      <Results />
    </main>
  );
}

export default App;
