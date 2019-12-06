import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Background from '../../components/Background';

import { Container } from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';

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

Dashboard.navigationOptions = ({ navigation }) => ({
  header: (
    <HeaderBar>
      <HeaderButton onPress={() => navigation.navigate('Help')}>
        <HeaderButtonText active={false}>Help</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => {}}>
        <HeaderButtonText active>Status</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => navigation.navigate('Send')}>
        <HeaderButtonText active={false}>Send</HeaderButtonText>
      </HeaderButton>
    </HeaderBar>
  ),
});

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
