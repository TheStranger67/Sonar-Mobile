import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, InteractionManager } from 'react-native';
import SignupJurForm from '../../../components/SignupForm/Jur';

import {
  Container,
  FormContainer,
} from './styles';

export default function SignupJurPage () {
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
        <StatusBar translucent={false} backgroundColor={'#151416'}/>
        <FormContainer>
          <SignupJurForm/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}