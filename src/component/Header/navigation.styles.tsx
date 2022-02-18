import styled from 'styled-components';

export const Navbar = styled.nav`
display: flex;
justify-content: center;
align-items: center;
  background-color: #85b7bae8;
  height: 25vh;
  margin: 0;
  margin-bottom:20px;
  flex-direction: row;
`;
export const TextWrapper = styled.h3<{
  margin?: string;
  padding?: string;
  fontsize?: string;
}>`
  margin: ${(props) => props.margin || '20px'};
  font-size: ${(props) => props.fontsize || '25px'};
`;
export const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 25vh;
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
