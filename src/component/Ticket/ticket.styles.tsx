import styled from 'styled-components';

const randomColor = ()=> {
   const letters = '0123456789ABCDEF';
   let color = '#';
   for (let i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
   }
   return color;
};

export const container = styled.div<{
  margin?: string;
  padding?: string;
  fontsize?: string;
  height?: string;
  width?: string;
}>`
  border: solid 2px ${randomColor};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  margin: ${(props) => props.margin || '10px'};
  height: ${(props) => props.height || '270px'};
  width: ${(props) => props.width || '260px'};

  /* background-color: #ebe9e9; */
`;
export const CheckBox = styled.input<{
  margin?: string;
  height?: string;
  width?: string;
}>`
  margin: ${(props) => props.margin || '10px'};
  height: ${(props) => props.height || '20px'};
  width: ${(props) => props.width || '20px'};
`;

export const TaskTitleInput = styled.input`
  width: 70%;
  height: 20px;
  padding: 25px;
  margin-right: 3%;
  padding: 10px;
  border-radius: 10px;
  border: none;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
`;
export const TicketTopSection = styled.div<{
  height?: string;
  width?: string;
}>`
  display: flex;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  height: ${(props) => props.height || '20%'};
  width: ${(props) => props.width || '100%'};
`;
export const AddTicketTopSection = styled(TicketTopSection)`
  flex-direction: row;
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const TicketMiddleSection = styled.div<{
  margin?: string;
  padding?: string;
  fontsize?: string;
  height?: string;
  width?: string;
}>`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: stretch;
  height: ${(props) => props.height || '70%'};
  width: ${(props) => props.width || '100%'};
`;
export const Text = styled.h2`
  margin: 10px;
`;
export const TExtWrapper = styled.h3<{
  height?: string;
  width?: string;
  fontsize?: string;
}>`
  height: ${(props) => props.height || '15px'};
  width: ${(props) => props.width || '5px'};
  font-size: ${(props) => props.fontsize || '17px'};
  margin: 0;
  padding: 0;
`;

export const DescriptionTextBox = styled.textarea`
  margin: 5px;
  display: flex;
  justify-content: space-around;
  /* background-color: #f3f3f37a; */
  height: 80%;
  overflow: hidden;
  resize: both;
  border: none;
  min-height: 40px;
  line-height: 20px;
`;

export const TicketEndSection = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  height: 10%;
  width: 100%;
`;
export const Image = styled.img`
  margin: 10px;
  height: 20px;
  width: 20px;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(0.8);
    box-shadow: 0 0 5px black;
  }
`;
export const TicketLayout = styled.div`
  position: fixed;
  left: 20%;
  bottom: 24%;
  width: 60vw;
  max-width: 70vw;
  height: 60vh;
  background-color: #918787ae;
  z-index: 1;
`;
