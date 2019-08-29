import React, { useState, useEffect } from 'react';
import { Text, InteractionManager } from 'react-native';
import LoginForm from '../../components/LoginForm';

import {
  Container,
  FormContainer,
  FormTitle,
  SignupButton
} from './styles.js';

export default function Login ({ navigation }) {
  const [ loading, setLoading ] = useState (true);

  useEffect (() => {
    InteractionManager.runAfterInteractions (() => {
      setLoading (false);
    });
  }, []);

  return (
    <Container>
      {!loading ? 
        <FormContainer>
          <FormTitle> 
            Login 
          </FormTitle>

          <LoginForm navigation={navigation}/>

          <SignupButton onPress={() => navigation.navigate ('Signup')}> 
            <Text style={{color: '#fff'}}>
              Cadastrar-se
            </Text>
          </SignupButton>
        </FormContainer>
      : null}
    </Container>
  );
}
