import { useState } from 'react';
import reactLogo from './assets/react.svg';
import Header from './components/Header';
import Home from './components/Home';
import FormularioImc from './components/FormularioImc';

function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <FormularioImc />
    </div>
  )
}

export default App;
