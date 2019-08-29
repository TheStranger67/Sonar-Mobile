import React, { useState, useEffect } from 'react';
import { ScrollView, InteractionManager } from 'react-native';
import SignupJurForm from '../../../components/SignupForm/Jur';

import {
  Container,
  FormContainer,
} from './styles';

export default function SignupJurPage ({ navigation }) {
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
          <SignupJurForm navigation={navigation}/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}