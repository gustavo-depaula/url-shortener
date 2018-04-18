import React from 'react'
import { Container, Input, Control, Button, Title, SubTitle } from 'reactbulma'
import styled from "styled-components";

const VerticalAlign = styled.div`
  display: flex;
  align-items: ${props => props.align ? props.align : 'center'};
  justify-content: ${props => props.align ? props.align : 'center'};
  height: 50vh;
`

class Home extends React.Component {
  render () {
    return (
      <div>
        <Container>
          <VerticalAlign>
            <Control large={true}>
              <Title>Tiny</Title>
              <SubTitle>A simple url shortener for busy people.</SubTitle>
              <Input id='link' placeholder='e.g usepakot.com'></Input>
              <Button info style={{width: '100%'}}>Short!</Button>
            </Control>
          </VerticalAlign>
        </Container>
      </div>
    )
  }
}

export default Home
