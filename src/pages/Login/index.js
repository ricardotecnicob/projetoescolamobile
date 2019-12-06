import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

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
} from './styles';

import logo from '../../assets/meninogustavo.png';

export default function Login({ navigation }) {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loading = false;

  function handleSubmit() {
    // dispatch(singInRequest(email, password));
    console.log(email, password);
    setEmail('');
    setPassword('');
  }

  return (
    <Container>
      <Triangle bottom={70} left={70} />
      <Triangle bottom={80} left={80} />
      <LogoImage source={logo} alt="logo" />
      <Form>
        <FormText>E-mail</FormText>
        <FormInput
          icon="mail-outline"
          keyboardType="email-address"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="example@gmail.com"
          placeholderTextColor="#fff"
          returnKeyType="next"
          onSubmitEditing={() => passwordRef.current.focus()}
          value={email}
          onChangeText={setEmail}
        />

        <FormText>Password</FormText>
        <FormInput
          icon="lock-outline"
          placeholder="********"
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
  );
}

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
