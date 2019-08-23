import React from 'react';
import { Text } from 'react-native';
import LoginForm from '../../components/LoginForm';

import {
  Container,
  FormContainer,
  FormTitle,
  SignupButton
} from './styles.js';

export default function Login ({ navigation }) {
  return (
    <Container>
      <FormContainer>
        <FormTitle> 
          Login 
        </FormTitle>

        <LoginForm navigation={navigation}/>

        <SignupButton> 
          <Text style={{color: '#fff'}}> 
            Cadastrar-se
          </Text>
        </SignupButton>
      </FormContainer>
    </Container>
  );
}
