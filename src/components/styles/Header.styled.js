import styled from 'styled-components';

export const StyledHeader = styled.header`
   background-color: ${({ theme }) => theme.colors.header};
`

export const Nav = styled.nav`
  display: flex;
  align-items: center; 
  justify-content: space-between; 
  margin-bottom: 40px;
`