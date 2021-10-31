import React from 'react'
import { Container } from './styles/container.styled'
import { StyledHeader, Nav } from './styles/Header.styled'
import { Button } from './styles/Button.styled'
import { Flex } from './styles/Flex.styled'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <h1>Huddle</h1>
        <Button>Try It Free</Button>
        </Nav>
        <Flex>
          <div>
            <h1>
              BUILD THE COMMUNITY
            </h1>
            <p>
             random text random text
            </p>
            <Button bg="#ff0099" color="#fff">
              Get Started for free
            </Button>
          </div>


        </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header
