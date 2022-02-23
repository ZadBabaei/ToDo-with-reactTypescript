import React from 'react'
import * as S from '../ticket.styles'
import * as Q from '../../Button/button.styles'


const AddTicket: React.FC = () => {
  return (
    <S.TicketLayout>
      <S.container height='400px' width='95%'>
        <S.AddTicketTopSection height='20%'>
          <S.Text>Task Title</S.Text>
          <S.TaskTitleInput type={'text'}></S.TaskTitleInput>
        </S.AddTicketTopSection>
        <S.TicketMiddleSection width='90%'>
          <S.TExtWrapper>Description</S.TExtWrapper>
          <S.DescriptionTextBox></S.DescriptionTextBox>
        </S.TicketMiddleSection>
        <S.TicketEndSection>
         <Q.default>
            submit
         </Q.default>
        </S.TicketEndSection>
      </S.container>
    </S.TicketLayout>
  );
}

export default AddTicket