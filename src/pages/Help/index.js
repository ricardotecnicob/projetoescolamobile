import React from 'react';
import Background from '../../components/Background';

import { Container, Title, Text } from './styles';
import { Body } from '../../components/Body';

export default function Send() {
  return (
    <Background>
      <Container>
        <Body>
          <Title>Lorem ipsum dolor</Title>
          <Text>
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </Text>
          <Title>Duis aute irure dolor</Title>
          <Text>
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </Body>
      </Container>
    </Background>
  );
}
