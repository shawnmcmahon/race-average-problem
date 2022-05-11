import { FunctionComponent } from 'react';
import Header from './Header';
import TimeSubmit from './TimeSubmit';

const App:FunctionComponent = () => {
  return (
    <main className="w-100 h-screen bg-grayDark">
      <Header />
      <TimeSubmit />
    </main>
  );
}

export default App;