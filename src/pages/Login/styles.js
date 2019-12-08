import { Platform, Animated, ImageBackground } from 'react-native';
import styled from 'styled-components/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  background-color: #024f83;
`;

export const LogoImage = styled(Animated.Image)`
  height: 250px;
  width: 250px;
  z-index: 5;
`;

export const LogoBall = styled(
  Animated.createAnimatedComponent(ImageBackground)
)`
  height: 220px;
  width: 220px;
  border-radius: 110;
  background-color: #fff;
  z-index: 4;
`;

export const Cloud = styled(Animated.Image)`
  position: absolute;
  top: 0;
  left: 24;

  width: 130px;
  height: 100px;
  z-index: 10;
`;

export const Form = styled.View`
  align-self: stretch;
  margin-top: 50px;
`;

export const FormInput = styled(Input)`
  margin-bottom: 10px;
  background: rgba(0, 0, 0, 0.1);
  text-align: left;
`;

export const FormText = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  margin-bottom: 8px;
  font-size: 12px;
`;

// Border does not appear in ReactButton https://github.com/kmagiera/react-native-gesture-handler/issues/477
export const ButtonBorder = styled.View`
  height: 48px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 4px;
  margin-top: 32px;

  padding-top: 1px;
  padding-left: 1px;
  padding-right: 1px;
  padding-bottom: 1px;
`;

export const SubmitButton = styled(Button)`
  background: #024f83;
`;

export const SignLink = styled.TouchableOpacity`
  margin-top: 32px;
`;

export const SignLinkText = styled.Text`
  color: rgba(255, 255, 255, 0.9);
  font-weight: bold;
  font-size: 16px;
`;

export const Triangle = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  width: 0;
  height: 0;

  background-color: transparent;
  border-bottom-width: ${props => props.bottom};
  border-left-width: ${props => props.left};
  border-top-color: rgba(255, 255, 255, 0.05);
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: rgba(255, 255, 255, 0.05);
`;
