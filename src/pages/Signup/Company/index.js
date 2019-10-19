import React, { useState, useEffect } from 'react';
import { ScrollView, InteractionManager } from 'react-native';
import CompanyForm from '../../../components/SignupForm/Company';

import {
  Container,
  FormContainer,
} from './styles';

export default function CompanySignupPage ({ navigation }) {
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
          <CompanyForm navigation={navigation}/>
        </FormContainer>
      </Container>
    </ScrollView>
  );
}