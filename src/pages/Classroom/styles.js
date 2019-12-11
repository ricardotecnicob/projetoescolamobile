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

export const BodyButtom = styled.View`
  margin: 0 20px 0 20px;
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

export const ListClass = styled.FlatList`
  height: ${Dimensions.get('window').height * 0.65};
`;

export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${props => (props.clicable === true ? '#024f83' : '#eee')};
  height: 50px;
  border-radius: 4px;
  padding: 0 10px;
  margin: 10px 0px 0 0;
`;

export const CardItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextItem = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #024f83;
  font-weight: bold;
`;

export const TextItemStudent = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: rgba(0, 0, 0, 0.4);
`;

export const NewClass = styled(Buttom)`
  background: #024f83;
  margin: 8px 5px 5px 0;
`;

export const CloseButton = styled.TouchableOpacity``;

export const ButtonClass = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  width: ${Dimensions.get('window').width * 0.6};
  height: 50;
`;

export const VisualizationItem = styled.View`
  flex: 1;
  background: #fff;
  border: 1px solid #ececec;
  margin-top: 5px;
  border-radius: 8px;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 10px 0 10px;
`;

export const VisualizationTitle = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

export const VisualizationBody = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

export const VisualizationFotter = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;

export const NoData = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 16;
`;

export const NoDataText = styled.Text`
  color: #ddd;
  font-size: 16px;
  text-align: center;
`;

export const ButtomExit = styled(Buttom)`
  margin: 0 25px;
  background: #ffb902;
`;
