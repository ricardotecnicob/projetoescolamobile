import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled(TouchableOpacity)`
  height: 46px;
  background: #555555;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
