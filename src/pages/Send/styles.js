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
  padding: 10px;
`;

export const BodyTop = styled.View`
  margin: 0 20px;
  height: ${Dimensions.get('window').height * 0.55};
`;

export const BodyMiddle = styled.View`
  flex: 1;
  margin: 10px 20px;
`;

export const BodyButtom = styled.View``;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.7);
  margin: 10px 0;
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
  margin: 0 20px;
  background: #024f83;
`;

export const ListClasses = styled.FlatList`
  height: ${Dimensions.get('window').height * 0.5};
`;

export const VisualizationItem = styled.View`
  flex: 1;
  background: #fff;
  border: 1px solid #ececec;
  margin-top: 5px;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

export const VisualizationTitle = styled.Text`
  font-size: 16px;
  align-self: flex-start;
  color: rgba(0, 0, 0, 0.6);
`;

export const VisualizationBody = styled.Text`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.6);
  text-align: justify;
`;

export const VisualizationFotter = styled.Text`
  font-size: 16px;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.6);
`;

export const NoData = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: 100;
`;

export const NoDataText = styled.Text`
  color: #ddd;
  font-size: 16px;
  text-align: center;
`;
