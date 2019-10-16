import React, { useState, useEffect } from 'react';
import { ScrollView, InteractionManager } from 'react-native';
import PersonalForm from '../../../components/SignupForm/Personal';

import {
  Container,
  FormContainer,
} from './styles';

export default function PersonalPage ({ navigation }) {
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
          <PersonalForm navigation={navigation}/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}
