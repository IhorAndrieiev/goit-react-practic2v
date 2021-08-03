import styled from '@emotion/styled';

export const Aside = styled.aside`
background-color: #fff;
position:relative;
margin-bottom: 20px;
`;

export const Header = styled.header`
background-color: #161d2a;
height: 80px;

&:hover {
    background-color: red;
}
`;

export const Menu = styled.ul`
list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  margin: 24px;
& svg {width: 24px;
    height: 24px;}
  &:hover {
  & svg {
    fill: #ff6b0a;
    width: 24px;
    height: 24px;
  }}
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #010101;
  margin-left: 16px;

  &:hover {
    color: #ff6b0a;
  }
`;

export const Footer = styled.footer`
position:absolute;
left: 0px;
bottom: 20px;

background-color: #fff;
height: 24px;
/* margin-top: 800px; */

display: flex;
  align-items: center;


`;

export const FooterMenu = styled.div`
background-color: #fff;
display: flex;
cursor: pointer;
  font-style: normal;
padding: 24px;
& svg {width: 24px;
    height: 24px;}
  &:hover {
  & svg {
    fill: #ff6b0a;
    width: 24px;
    height: 24px;
    
  }}
`;

export const FooterText = styled.span`
display: flex;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 24px;
margin-left: 24px;

align-items: center;
letter-spacing: 0.4px;
  &:hover {
    color: #ff6b0a;
  }
`;