import React, { useState, useEffect } from 'react';
import { Text, InteractionManager } from 'react-native';
import LoginForm from '../../components/LoginForm';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  FormContainer,
  FormHeader,
  BackButton,
  FormTitle,
  HeaderSpace,
  SignupButton,
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
          <FormHeader>
            <BackButton onPress={() => navigation.goBack ()}>
              <Icon name='angle-left' size={26} color='#fff'></Icon>
            </BackButton>
            <FormTitle> 
              Login
            </FormTitle>
            <HeaderSpace/>
          </FormHeader>

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
