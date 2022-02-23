import React from 'react';
import close from './TicketComponent/close.png'
import edit from './TicketComponent/edit.png'
import * as S from './ticket.styles';

const ticket: React.FC = () => {
  return (
    <div>
      <S.container>
        <S.TicketTopSection>
          <S.CheckBox type={'radio'}></S.CheckBox>
          <label>Task Title</label>
        </S.TicketTopSection>
        <S.TicketMiddleSection>
          <S.TExtWrapper>Description: </S.TExtWrapper>
          <S.DescriptionTextBox ></S.DescriptionTextBox>
        </S.TicketMiddleSection>
        <S.TicketEndSection>
          <S.Image
            src={close}
            onClick={() => {
              console.log('clicked on close');
            }}></S.Image>
          <S.Image
            src={edit}
            onClick={() => {
              console.log('clicked on edit');
            }}></S.Image>

        </S.TicketEndSection>
      </S.container>
    </div>
  );
};

export default ticket;
