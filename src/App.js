import React from 'react';
import CreateMonster from './components/CreateMonster';
import Monsters from './components/Monsters';
import "./App.css";

function App() {
  return (
    <div className="main-wrapper">
      <img alt="logo" className="logo-main" src="logo.svg" />
      <p className="title-main">Monsters</p>
      <CreateMonster />
      <Monsters />
    </div>
  );
}

export default App;