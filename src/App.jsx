import React from 'react';
import Navbar from './components/Navbar';
import CardGrid from './components/Cardgrid';
import CounterDemo from './components/CounterDemo';
import Footer from './components/Footer';
import Home from './components/Home';

const App = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />

      
      <div className="bg-white dark:bg-gray-800 py-2 px-4">
        <Home />
      </div>
      <div className="bg-gray-50 dark:bg-gray-900 py-2 px-4">
        <CounterDemo />
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
        <CardGrid />
      </div>

      <Footer />
    </div>
  );
};

export default App;