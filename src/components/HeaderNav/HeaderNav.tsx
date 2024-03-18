import React from 'react';
import * as S from './HeaderNav.styles';
import { HeaderProps } from './HeaderNav.types';
import  PeopleIcon from "@assets/icons/ion_person.svg?react";
import PrevIcon from "@assets/icons/ion_chevron-back.svg?react";
import { useNavigate } from 'react-router-dom';

const Header: React.FC<HeaderProps> = ({ type, width,text,height }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    
    navigate('/myPage');
  };
  const goBack = () => {
    
    navigate(-1);
  };
  return (
    <S.StyledHeader width={width} height={height}>
      
        {type === 'withLogo' && (
          <>
            <S.HeaderWithLogo ><S.TitleText>기억해봄</S.TitleText> <button onClick={handleClick}><PeopleIcon></PeopleIcon></button></S.HeaderWithLogo>
          </>
        )}
        {type === 'withPrevButton' && (
          <>
            <S.HeaderWithPrev>
              <button onClick={goBack}><PrevIcon /></button>
               <span>{text}</span>
          </S.HeaderWithPrev>
          </>
        )}
        {type === 'textOnly' && (
          <>
            <S.HeaderOnlyText><span>{text}</span></S.HeaderOnlyText>
          </>
        )}
     
    </S.StyledHeader>
  );
};

export default Header;