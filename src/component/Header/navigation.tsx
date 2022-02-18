/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Add_button from '../Button/button.styles';
import SearchBox from '../Search/searchBar';
import * as S from './navigation.styles'

const navigation:React.FC=()=> {
  return (
    <S.Navbar>
      <S.Wrapper>
      <h3>TODO</h3>
      <SearchBox type='search' placeholder='Search'></SearchBox>
      <Add_button
        onClick={() => {
          console.log('clicked');
        }}>
        &#43;
      </Add_button>
      </S.Wrapper>
    </S.Navbar>
  );
}

export default navigation