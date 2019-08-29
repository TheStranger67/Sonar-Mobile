import React, { useState, useEffect } from 'react';
import { ScrollView, InteractionManager } from 'react-native';
import SignupFisForm from '../../../components/SignupForm/Fis';

import {
  Container,
  FormContainer,
} from './styles';

export default function SignupFisPage ({ navigation }) {
  const [ loading, setLoading ] = useState (true);

  useEffect (() => {
    InteractionManager.runAfterInteractions (() => {
      setLoading (false);
    });
  }, []);

  if (loading) return (
    <Container>
    </Container>
  );

  return (
    <ScrollView>
      <Container>
        <FormContainer>
          <SignupFisForm navigation={navigation}/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}
