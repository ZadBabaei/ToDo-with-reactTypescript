import React, { useState } from 'react';
import Header from './component/Header/navigation';
import Ticket from './component/Ticket/ticket';
import * as S from './App.Styles';
import './App.css';
import AddTicket from './component/Ticket/TicketComponent/AddTicket';

const App: React.FC = () => {
  const [AddTicketVisibility, setAddTicketVisibility]=useState(false);
   const [title, setTitle] = useState<string>('');


  return (
    <div>
      <Header
        AddTicketVisibility={AddTicketVisibility}
        setAddTicketVisibility={setAddTicketVisibility}></Header>
      {AddTicketVisibility && (
        <AddTicket
          AddTicketVisibility={AddTicketVisibility}
          setAddTicketVisibility={setAddTicketVisibility}
          title={title}
          setTitle={setTitle}></AddTicket>
      )}
      <S.Wrapper>
        <Ticket title={title} setTitle={setTitle}></Ticket>
        <Ticket title={title} setTitle={setTitle}></Ticket>
      </S.Wrapper>
    </div>
  );
};

export default App;
