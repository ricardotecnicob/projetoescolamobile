import styled from 'styled-components/native';
import { Platform, Dimensions } from 'react-native';

import Buttom from '../../components/Buttom';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const BodySend = styled.View`
  margin: 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
`;

export const ViewCheckboxClass = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  height: 36;
  align-items: center;
`;

export const ViewCheckboxes = styled.View``;

export const ViewCheckboxStudent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: 36;
  margin-left: 20;
`;

export const CheckboxText = styled.Text`
  font-size: 14px;
  text-align: left;
  max-width: 90%;
`;

export const ButtonSend = styled(Buttom)`
  margin: 0 25px;
  background: #024f83;
`;

export const ListClasses = styled.FlatList`
  height: ${Dimensions.get('window').height / 3};
`;
