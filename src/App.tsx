import React, { useState } from 'react';
import Header from './component/Header/navigation';
import Ticket from './component/Ticket/ticket';
import * as S from './App.Styles';
import './App.css';
import AddTicket from './component/Ticket/TicketComponent/AddTicket';

const App: React.FC = () => {
  const [AddTicketVisibility, setAddTicketVisibility]=useState(false);
  return (
    <div>
      <Header></Header>
      {AddTicketVisibility &&(

      <AddTicket></AddTicket>
      )}
      <S.Wrapper>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>
        <Ticket></Ticket>



      </S.Wrapper>
    </div>
  );
};

export default App;
