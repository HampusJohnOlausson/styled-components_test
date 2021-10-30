import React from 'react'
import { Container } from './styles/container.styled'
import { StyledHeader, Nav } from './styles/Header.styled'
import { Button } from './styles/Button.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <h1>Huddle</h1>
        <Button>Try It Free</Button>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
