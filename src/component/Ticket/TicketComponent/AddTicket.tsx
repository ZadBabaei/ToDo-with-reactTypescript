import React, { useState } from 'react';
import * as S from '../ticket.styles';
import * as Q from '../../Button/button.styles';
import TaskInput from './Taskinput';

interface props {
  AddTicketVisibility: boolean;
  setAddTicketVisibility: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

const AddTicket: React.FC<props> = ({
  AddTicketVisibility,
  setAddTicketVisibility,
  title,
  setTitle,
}) => {
  return (
    <S.TicketLayout>
      <S.container height='400px' width='95%' border='none'>
        <S.AddTicketTopSection height='20%'>
          <S.Text>Task Title</S.Text>
          <TaskInput title={title} setTitle={setTitle}></TaskInput>
        </S.AddTicketTopSection>
        <S.TicketMiddleSection width='90%'>
          <S.TExtWrapper>Description</S.TExtWrapper>
          <S.DescriptionTextBox></S.DescriptionTextBox>
        </S.TicketMiddleSection>
        <S.TicketEndSection>
          <Q.default
            onClick={() => {
              setAddTicketVisibility(false);
           
              console.log('submit');
            }}>
            submit
          </Q.default>
        </S.TicketEndSection>
      </S.container>
    </S.TicketLayout>
  );
};

export default AddTicket;
