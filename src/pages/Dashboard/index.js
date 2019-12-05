import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container } from './styles';

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Container>
        <Text>Tela inicial</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Icon name="remove" size={50} color="#000" />
        </TouchableOpacity>
      </Container>
    </Background>
  );
}
