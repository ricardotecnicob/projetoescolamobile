import React, { useRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Animated, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
// import md5 from 'react-native-md5';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
  LogoImage,
  ButtonBorder,
  Triangle,
  FormText,
  LogoBall,
  Cloud,
} from './styles';

import logo from '../../assets/meninogustavo.png';
import cloudwelcome from '../../assets/cloudwelcome.png';

import { signInRequest } from '../../store/modules/login/actions';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [boyY] = useState(new Animated.Value(-100));
  const [ballY] = useState(new Animated.Value(0));
  const [cloud] = useState(new Animated.Value(0));

  const loading = false;

  useEffect(() => {
    Animated.decay(boyY, {
      velocity: 0.15,
    }).start();
    Animated.decay(ballY, {
      velocity: -0.05,
    }).start();
    Animated.sequence([
      Animated.delay(4000),
      Animated.timing(cloud, {
        toValue: 20,
        duration: 2000,
      }),
      Animated.delay(4000),
      Animated.timing(cloud, {
        toValue: 0,
        duration: 2000,
      }),
    ]).start();
  }, []); // eslint-disable-line

  function handleSubmit() {
    // dispatch(singInRequest(email, password));
    // const hex_md5 = md5.hex_md5(password);
    // console.log(email, password);
    // console.log('Admin', hex_md5);
    setEmail('');
    setPassword('');
    dispatch(signInRequest());
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#024f83" />
      <Container>
        <Triangle bottom={70} left={70} />
        <Triangle bottom={80} left={80} />
        <LogoBall style={{ top: ballY }}>
          <LogoImage style={{ top: boyY }} source={logo} alt="logo" />
        </LogoBall>
        <Cloud
          source={cloudwelcome}
          style={{
            top: cloud,
            opacity: cloud.interpolate({
              inputRange: [0, 20],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            }),
          }}
          alt="cloud1"
        />
        <Form>
          <FormText>E-mail</FormText>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="example@gmail.com"
            placeholderTextColor="rgba(255,255,255,0.4)"
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            value={email}
            onChangeText={setEmail}
          />

          <FormText>Password</FormText>

          <FormInput
            icon="lock-outline"
            placeholder="********"
            placeholderTextColor="rgba(255,255,255,0.4)"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={password}
            onChangeText={setPassword}
          />
          <ButtonBorder>
            <SubmitButton loading={loading} onPress={handleSubmit}>
              Sign In
            </SubmitButton>
          </ButtonBorder>
        </Form>
        <SignLink onPress={() => navigation.navigate('Login')}>
          <SignLinkText>Create a free account</SignLinkText>
        </SignLink>
      </Container>
    </>
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
