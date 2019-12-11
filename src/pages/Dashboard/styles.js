import styled from 'styled-components';
import { Platform, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Buttom from '../../components/Buttom';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const BodyTop = styled.View`
  max-height: ${Dimensions.get('window').height * 0.7};
`;

export const HeaderWelcome = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextWelcome = styled.Text`
  font-size: 24px;
  text-transform: uppercase;
  color: #333;
  font-weight: bold;
  margin-left: 16px;
`;
export const ButtonExitIcon = styled(Icon)``;

export const TextTeacher = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 16px;
  padding-top: 5px;
  padding-bottom: 30px;
`;

export const Item = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: #eee;
  border-radius: 4px;
  padding: 0 12px 8px 12px;
  margin: 0 12px 8px 12px;
  background-color: ${props => props.backgroundColor};
`;

export const ItemIcon = styled(Icon)`
  display: flex;
  align-self: flex-start;
  padding-top: 24px;
  padding-right: 16px;
`;

export const NumberItem = styled.View`
  display: flex;
  align-items: flex-start;
  padding: 16px;
`;
export const TextNumber = styled.Text`
  color: #ffffff;
  font-size: ${props => (props.size ? props.size : 34)};
  text-transform: uppercase;
  color: ${props => props.fontColor};
`;
export const TextItem = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ButtomExit = styled(Buttom)`
  margin: 0 16px;
  padding: 16px;
  background-color: #fff;
`;
