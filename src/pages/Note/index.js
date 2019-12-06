import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';

import { Container } from './styles';

export default function Note() {
  return (
    <Background>
      <Container>
        <Text>Note</Text>
      </Container>
    </Background>
  );
}
