import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
// BaseButton outra opção

export const Container = styled(RectButton)`
  height: 46px;
  background: #024f83;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;
