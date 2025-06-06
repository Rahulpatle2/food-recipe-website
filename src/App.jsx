import React from 'react';
import Navbar from './components/Navbar';
import MainRoutes from './routes/MainRoutes';
import NavForSmall from './components/NavForSmall';

const App = () => {
  return (
    <div className='flex flex-col  '  >
      <NavForSmall/>
      <MainRoutes/>
    </div>
  );
};

export default App;