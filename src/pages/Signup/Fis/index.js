import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, InteractionManager } from 'react-native';
import SignupFisForm from '../../../components/SignupForm/Fis';

import {
  Container,
  FormContainer,
} from './styles';

export default function SignupFisPage () {
  const [ loading, setLoading ] = useState (true);

  useEffect (() => {
    InteractionManager.runAfterInteractions (() => {
      setLoading (false);
    });
  }, []);

  if (loading) return (
    <Container>
      <StatusBar translucent={false} backgroundColor={'#151416'}/>
    </Container>
  );

  return (
    <ScrollView>
      <Container>
        <StatusBar translucent={false} backgroundColor={'#151416'}/>
        <FormContainer>
          <SignupFisForm/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}
