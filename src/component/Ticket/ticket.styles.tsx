import styled from 'styled-components';

export const container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 10px;
  height: 270px;
  width: 230px;
  background-color: #ccc9c9;
`;
export const CheckBox = styled.input`
  margin: 10px;
  height: 20px;
  width: 20px;
`;
export const TicketTopSection = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height: 20%;
  width: 100%;
  background-color: hotpink;
`;

export const TicketMiddleSection = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  height: 70%;
  width: 100%;
  background-color: #625ff1;
`;
export const TExtWrapper = styled.div`
  height: 15px;
  margin: 5px;
`;

export const DescriptionTextBox = styled.textarea`
margin: 5px;
display: flex;
justify-content: space-around;
background-color: yellowgreen;
height: 80%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
`;

export const TicketEndSection = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
  height: 10%;
  width: 100%;
  background-color: #ac2222;
`;