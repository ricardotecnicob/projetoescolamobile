import styled from 'styled-components/native';
import Buttom from '../../components/Buttom';
import { Dimensions } from 'react-native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const BodyTop = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  margin: 0 20px;
`;

export const BodyMiddle = styled.View`
  flex: 1;
  margin: 10px 20px;
`;

export const BodyButtom = styled.View``;

export const TitleText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ListNotes = styled.FlatList`
  height: ${Dimensions.get('window').height / 3 - 30};
`;
export const Item = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #024f83;
  height: 50px;
  border-radius: 5px;
  padding: 0 10px;
  margin: 20px 5px 0 0;
`;

export const TextItem = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const VisualizationItem = styled.View`
  flex: 1;
  background: #fff;
  border: 2px solid #ececec;
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
`;

export const NoDataText = styled.Text`
  color: #ddd;
  font-size: 25px;
`;

export const ButtomEdit = styled(Buttom)`
  margin: 0 25px;
  background: #ffb902;
`;
