import React, { useState, useEffect } from 'react';
import { Pages } from './assets/Pages/Pages';
import MALoading from './assets/Components/MALoading/MALoading';
import './App.css';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <MALoading /> : <Pages />}
    </>
  );
};

export default App;