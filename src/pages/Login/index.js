import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from './styles';

export default function Login({ navigation }) {
  return (
    <Container>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="add" size={50} color="#000" />
      </TouchableOpacity>
    </Container>
  );
}
