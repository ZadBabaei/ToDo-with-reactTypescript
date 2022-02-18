import React from 'react';
import Header from './component/Header/navigation';
import Ticket from './component/Ticket/ticket';
import * as S from './App.Styles';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <S.Wrapper>
        <Ticket></Ticket>
       
      </S.Wrapper>
    </div>
  );
};

export default App;
