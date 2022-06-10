import React, { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { RouterApp } from './router/Router';


const App = () => {
  const [countries, setCountries] = useState([]);
  return (
    <>
      <Header />
      <Main>
        <RouterApp countries={countries} setCountries={setCountries}/>
      </Main>
    </>
  );
};

export default App;
