import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';

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
`;

export const BodyMiddle = styled.View`
  flex: 1;
  margin: 10px 20px;
`;

export const BodyButtom = styled.View``;

export const ButtonNotes = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: ${Dimensions.get('window').width * 0.6};
  height: 50;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${props => (props.active ? 'rgba(0, 0, 0, 0.7)' : '#aaa')};
`;

export const ListNotes = styled.FlatList`
  height: ${props =>
    props.preview
      ? Dimensions.get('window').height / 3 - 30
      : Dimensions.get('window').height * 0.6};
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #024f83;
  height: 50px;
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px 0px 0 0;
`;

export const TextItem = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #024f83;
`;

export const VisualizationHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CloseButton = styled.TouchableOpacity``;

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
`;

export const NoDataText = styled.Text`
  color: #ddd;
  font-size: 16px;
  text-align: center;
`;

export const ButtomEdit = styled(Buttom)`
  margin: 0 25px;
  background: #024f83;
`;
