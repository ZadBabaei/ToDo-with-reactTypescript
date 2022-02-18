import React from 'react';
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
              <S.TExtWrapper>
                  Description
              </S.TExtWrapper>
              <S.DescriptionTextBox
               placeholder='type here'></S.DescriptionTextBox>
          </S.TicketMiddleSection>
          <S.TicketEndSection>

          </S.TicketEndSection>
      </S.container>
    </div>
  );
};

export default ticket;
