import React from 'react';
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import GameSetup from './components/GameSetup';
import ActionButtons from './components/ActionButtons';
import './styles/variables.css';
import './styles/base.css';
import './styles/components.css';

function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <GameSetup />
      <ActionButtons />
    </div>
  );
}

export default App;
