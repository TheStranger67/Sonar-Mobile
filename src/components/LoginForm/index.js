import React from 'react';
import { View, Text } from 'react-native';
import api from '../../services/api';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-community/async-storage';

import {
  FormField,
  Label,
  Input,
  ErrorLabel,
  ErrorMessage,
  Submit,
} from './styles';

function LoginForm (props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <View>
      <FormField>
        <Label> E-mail </Label>
        <Input
          spellCheck={false}
          autoCapitalize='none'
          placeholder='Insira seu e-mail'
          error={errors.email && touched.email}
          value={values.email}
          onChangeText={handleChange ('email')}
          onBlur={handleBlur ('email')}
          maxLength={50}
        />
        {errors.email && touched.email && (
          <ErrorLabel> {errors.email} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Senha </Label>
        <Input
          secureTextEntry={true}
          placeholder='Insira sua senha'
          error={errors.password && touched.password}
          value={values.password}
          onChangeText={handleChange ('password')}
          onBlur={handleBlur ('password')}
          maxLength={16}
        />
        {errors.password && touched.password && (
          <ErrorLabel> {errors.password} </ErrorLabel>
        )}
      </FormField>

      {errors.message && (
        <ErrorMessage> 
          {errors.message} 
        </ErrorMessage>
      )}
      
      <Submit disabled={isSubmitting} onPress={handleSubmit}>
        <Text style={{color: '#fff'}}>
          Entrar
        </Text>
      </Submit>
    </View>
  );
}

export default withFormik ({
  mapPropsToValues: () => ({ 
    email: '',
    password: '',
  }),

  validationSchema: Yup.object ().shape ({
    email: Yup.string ()
      .email ('Digite um e-mail válido')
      .required ('Preencha o campo de e-mail'),
      
    password: Yup.string ()
      .required ('Preencha o campo de senha'),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    try {
      const response = await api.post ('/users/auth', values);
      const { data } = response;

      await AsyncStorage.setItem ('userToken', data.token);
      
      props.navigation.navigate ('Logged');
    } catch (error) {
      setSubmitting (false);
      
      error.response
      ? setErrors ({message: error.response.data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  },
}) (LoginForm);
