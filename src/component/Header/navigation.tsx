/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Add_button from '../Button/button.styles';
import SearchBox from '../Search/searchBar';
import * as S from './navigation.styles'

const navigation:React.FC=()=> {
  return (
    <S.Navbar>
      <S.Wrapper>
        <S.TextWrapper>TODO</S.TextWrapper>
        <SearchBox
          type='search'
          placeholder='Search'
          src='https://www.pikpng.com/transpng/bimJix/'></SearchBox>
        <Add_button
          onClick={() => {
            console.log('clicked');
          }}>
          <S.TextWrapper margin='0px' fontsize='20px'>
            {' '}
            &#43;
          </S.TextWrapper>
        </Add_button>
      </S.Wrapper>
    </S.Navbar>
  );
}

export default navigation