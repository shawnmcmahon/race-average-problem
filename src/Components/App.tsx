import React, { FunctionComponent } from 'react';
import Header from './Header';
import Results from './Results';
import TimeSubmit from './TimeSubmit';

const App:FunctionComponent = () => {
  return (
    <div className="w-100 h-screen min-w-max">
      <Header />
      <TimeSubmit />
    </div>
  );
}

export default App;
