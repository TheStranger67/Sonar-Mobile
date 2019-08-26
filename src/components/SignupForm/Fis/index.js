import React from 'react';
import { View, Text } from 'react-native';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import {
  FormField,
  Label,
  Input,
  ErrorLabel,
  ErrorMessage,
  Submit
} from '../styles';

function SignupFisForm (props) {
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
        <Label> Nome completo </Label>
        <Input
          placeholder='Insira seu nome completo'
          error={errors.name && touched.name}
          value={values.name}
          onChangeText={handleChange ('name')}
          onBlur={handleBlur ('name')}
          maxLength={70}
        />
        {errors.name && touched.name && (
          <ErrorLabel> {errors.name} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Endereço de e-mail </Label>
        <Input
          placeholder='Insira seu endereço de e-mail'
          spellCheck={false}
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
          placeholder='Mínimo de 8 caracteres'
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

      <FormField>
        <Label> Confirme sua senha </Label>
        <Input
          placeholder='Confirme a senha informada acima'
          error={errors.passwordConf && touched.passwordConf}
          value={values.passwordConf}
          onChangeText={handleChange ('passwordConf')}
          onBlur={handleBlur ('passwordConf')}
          maxLength={16}
        />
        {errors.passwordConf && touched.passwordConf && (
          <ErrorLabel> {errors.passwordConf} </ErrorLabel>
        )}
      </FormField>
      
      <FormField>
        <Label> CPF </Label>
        <Input
          placeholder='Digite seu número de CPF'
          error={errors.cpf && touched.cpf}
          value={values.cpf}
          onChangeText={handleChange ('cpf')}
          onBlur={handleBlur ('cpf')}
        />
        {errors.cpf && touched.cpf && (
          <ErrorLabel> {errors.cpf} </ErrorLabel>
        )}
      </FormField>
    
      <FormField>
        <Label> Data de nascimento </Label>
        <Input
          placeholder='dd/mm/aaaa'
          error={errors.birth && touched.birth}
          value={values.birth}
          onChangeText={handleChange ('birth')}
          onBlur={handleBlur ('birth')}
        />
        {errors.birth && touched.birth && (
          <ErrorLabel> {errors.birth} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Telefone (opcional) </Label>
        <Input
          placeholder='Insira seu número de telefone'
          error={errors.phone && touched.phone}
          value={values.phone}
          onChangeText={handleChange ('phone')}
          onBlur={handleBlur ('phone')}
        />
        {errors.phone && touched.phone && (
          <ErrorLabel> {errors.phone} </ErrorLabel>
        )}
      </FormField>

      {errors.message && (
        <ErrorMessage>
          {errors.message}
        </ErrorMessage>
      )}

      <Submit disabled={isSubmitting} onPress={handleSubmit}>
        <Text style={{color: '#fff'}}>
          Cadastrar
        </Text>
      </Submit>
    </View>
  );
}

export default withFormik ({
  mapPropsToValues: () => ({
    step: 0,
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    cpf: '',
    birth: '',
    phone: '',
  }),

  validationSchema: Yup.object ().shape ({
    name: Yup.string ()
      .min (3, 'O nome deve ter pelo menos 3 caracteres')
      .required ('Preencha o campo de nome'),

    email: Yup.string ()
      .email ('Digite um e-mail válido')
      .required ('Preencha o campo de e-mail'),

    cpf: Yup.string ()
      .required ('Preencha o campo de CPF'),

    password: Yup.string ()
      .min (8, 'A senha deve ter no mínimo 8 caracteres')
      .required ('Preencha o campo de senha'),

    passwordConf: Yup.string ()
      .required ('Preencha o campo de confirmação de senha')
      .oneOf ([Yup.ref ('password'), null], 'As duas senhas devem ser iguais'),

    birth: Yup.string ()
      .required ('Preencha o campo de data de nascimento')
      .min (8, 'Insira uma data válida (formato dd/mm/aaaa)')
      .test ('validYear', 'Insira um ano válido (entre 1900 e 2010)', function (value) {
        if (!value) return true;
        const year = value.split ('/')[2];
        return year >= 1900 && year <= 2010;
      }),
    
    phone: Yup.string ()
      .test ('validPhone', 'Insira um número de telefone válido', function (value) {
        const phoneExp = /\(|\)| |-/g;
        if (!value) return true;
        return value.replace (phoneExp, '').length >= 10;
      }),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, setFieldValue, props }) => {
    alert ('Success');
    /*
    delete values.passwordConf;
    values.birth = values.birth.split ("/").reverse ().join ("-");

    try {
      const response = await api.post ('/users', values);
      const { data } = response;

      alert (data.message);
      props.navigation.navigate ('Login');
    } catch (error) {
      setSubmitting (false);

      error.status
      ? setErrors ({message: error.response.data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou. Tente novamente!'});
    } */
  }, 
}) (SignupFisForm);
