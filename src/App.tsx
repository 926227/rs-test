import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header/Header';
import {Footer} from './components/footer/Footer';
import {Button} from './components/generics/button/Button';
import {PrimaryButton} from './components/primary-button/PrimaryButton';

function App() {
  const [count2, setCount] = useState<number>(0);

  const increment = () => {
    const inc = (current: number) => current + 1;
    setCount(inc);
  };

  const decrement = () => {
    setCount((current) => current - 1);
  };

  return (
    <div className="App">
      <Header name="Vasya" />
      <Button onKick={decrement}>decrement</Button>
      <PrimaryButton className='' onKick={increment}>increment</PrimaryButton>
      <Footer count={count2} />
    </div>
  );
}

export default App;
