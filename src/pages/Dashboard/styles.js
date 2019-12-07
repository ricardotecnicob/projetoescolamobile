import styled from 'styled-components';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const BodyTop = styled.View``;

export const BodyButtom = styled.View``;

export const TextWelcome = styled.Text`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;
export const TextTeacher = styled.Text`
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 30px;
`;
export const Item = styled.View`
  flex-direction: row;
  padding-bottom: 15px;
  align-items: center;
`;
export const NumberItem = styled.View`
  height: 61;
  margin-top: 10px;
  width: 61;
  margin: 0 15px;
  background: #ffb902;
  justify-content: center;
  align-items: center;
  border-radius: 30.5px;
`;
export const TextNumber = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
`;
export const TextItem = styled.Text`
  font-size: 15px;
  font-weight: bold;
`;

export const ButtomExit = styled(Button)`
  margin: 0 25px;
  background: #dc525a;
`;
