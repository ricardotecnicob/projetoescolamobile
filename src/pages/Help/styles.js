import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const Title = styled.Text`
  text-align: center;
  font-size: 17px;
  font-weight: bold;
  padding-bottom: 15px;
`;
export const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  padding: 0 20px;
  padding-bottom: 15px;
`;
