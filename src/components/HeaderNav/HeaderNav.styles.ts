import React from 'react';
import styled from '@emotion/styled';
import { HeaderWrapperProps } from './HeaderNav.types';


export const StyledHeader = styled.div<HeaderWrapperProps>`
  position: fixed;
  top: 0;
  background-color: lightgray;
  max-width: 780px; // 이렇게 해야만,?
  width: ${(props) => props.width || '100%'};
  height:  ${(props) => props.height || '96px'};

`;

export const HeaderWithLogo = styled.div`
  margin-top: 48px;
  /* display: inline-flex; */
  padding: 6px 20px 6px 16px;
  /* align-items: end; */
  display: flex;
  /* align-items: center;  */
  justify-content: space-between;
  /* gap: 159px; */
  
  
`
export const HeaderWithPrev = styled.div`
 display: flex;
padding: 48px 137px 0px 8px;
align-items: center;
/* gap: 5rem; */
flex-shrink: 0;
span{
  color: var(--black-000, #151515);

font-style : ${({ theme }) => theme.text.heading4};
position: absolute;
left: 50%;
transform: translateX(-50%);
}
  
`
// 높이 80
export const HeaderOnlyText = styled.div`
padding-top: 44px;
padding-bottom: 12px;

span{
  color: var(--black-000, #151515);
text-align: center;
/* display: flex; */
/* align-items: center; */
font-family: "Apple SD Gothic Neo";
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
position: absolute;
left: 50%;
transform: translateX(-50%);
}

  
`

export const TitleText = styled.div`
color: ${({ theme }) => theme.colors.pink.logo};
  
  font-family: "Cafe24 Ssurround";
  font-size: 1.72338rem; 
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.379px; 
`
