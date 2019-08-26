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

function SignupJurForm (props) {
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
        <Label> Razão Social </Label>
        <Input
          placeholder='Insira a razão social'
          spellCheck={false}
          error={errors.razsoc && touched.razsoc}
          value={values.razsoc}
          onChangeText={handleChange ('razsoc')}
          onBlur={handleBlur ('razsoc')}
          maxLength={100}
        />
        {errors.razsoc && touched.razsoc && (
          <ErrorLabel> {errors.razsoc} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Nome completo </Label>
        <Input
          placeholder='Insira o nome do responsável'
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
          placeholder='Insira seu e-mail'
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
          onChangeText={handleChange ('passwordConf')}
          onBlur={handleBlur ('passwordConf')}
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
        <Label> CNPJ </Label>
        <Input
          placeholder='Digite o número de CNPJ' 
          error={errors.cnpj && touched.cnpj}
          value={values.cnpj}
          onChangeText={handleChange ('cnpj')}
          onBlur={handleBlur ('cnpj')}
        />
        {errors.cnpj && touched.cnpj && (
          <ErrorLabel> {errors.cnpj} </ErrorLabel>
        )}
      </FormField>
    
      <FormField>
        <Label> Telefone (opcional) </Label>
        <Input
          placeholder='Insira um número de telefone'
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

      <Submit disabled={isSubmitting}>
        <Text style={{color: '#fff'}}>
          Cadastrar
        </Text>
      </Submit>
    </View>
  );
}

export default withFormik ({
  mapPropsToValues: () => ({
    razsoc: '',
    name: '',
    email: '',
    password: '',
    passwordConf: '',
    cnpj: '',
    phone: '',
  }),

  validationSchema: Yup.object ().shape ({
    razsoc: Yup.string ()
      .min (3, 'A razão social deve ter pelo menos 3 caracteres')
      .required ('Preencha o campo de razão social'),

    name: Yup.string ()
      .min (3, 'O nome deve ter pelo menos 3 caracteres')
      .required ('Preencha o campo de nome'),

    email: Yup.string ()
      .email ('Digite um e-mail válido')
      .required ('Preencha o campo de e-mail'),

    password: Yup.string ()
      .min (8, 'A senha deve ter no mínimo 8 caracteres')
      .required ('Preencha o campo de senha'),

    passwordConf: Yup.string ()
      .required ('Preencha o campo de confirmação de senha')
      .oneOf ([Yup.ref ('password'), null], 'As duas senhas devem ser iguais'),
      
    cnpj: Yup.string ()
      .required ('Preencha o campo de CNPJ'),

    phone: Yup.string ()
      .test ('validPhone', 'Insira um número de telefone válido', function (value) {
        const phoneExp = /\(|\)| |-/g;
        if (!value) return true;
        return value.replace (phoneExp, '').length >= 10;
      }),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    alert ('Success');

    /*
    delete values.passwordConf;
    
    try {
      const response = await api.post ('/users/jur', values);
      const { data } = response;

      alert (data.message);
      props.navigation.navigate ('Login');
    } catch (error) {
      setSubmitting (false);

      error.status 
      ? setErrors ({message: error.response.data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    } */
  },
}) (SignupJurForm);
