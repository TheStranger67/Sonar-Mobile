import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import api from '../../../services/api';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import {
  FormField,
  Label,
  Input,
  MaskedInput,
  ErrorLabel,
  ErrorMessage,
  Submit
} from '../styles';

function CompanyForm (props) {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const handleMaskedInputChange = (field, value) => {
    const rawValue = getRawValue (value);
    setFieldValue (field, rawValue);
  }

  const getRawValue = value => {
    const regEx = /\(|\)| |\.|\/|-|/g;
    return value.replace (regEx, '');
  }

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
        <Label> Nome do resposável </Label>
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
        <Label> CNPJ </Label>
        <MaskedInput
          type={'cnpj'}
          placeholder='Digite o número de CNPJ'
          error={errors.cnpj && touched.cnpj}
          value={values.cnpj}
          onChangeText={value => handleMaskedInputChange ('cnpj', value)}
          onBlur={handleBlur ('cnpj')}
          maxLength={18}
        />
        {errors.cnpj && touched.cnpj && (
          <ErrorLabel> {errors.cnpj} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Endereço de e-mail </Label>
        <Input
          placeholder='Insira seu e-mail'
          spellCheck={false}
          keyboardType='email-address'
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
          placeholder='Mínimo de 8 caracteres'
          error={errors.password && touched.password}
          value={values.password}
          onChangeText={handleChange ('password_confirmation')}
          onBlur={handleBlur ('password_confirmation')}
          maxLength={16}
        />
        {errors.password && touched.password && (
          <ErrorLabel> {errors.password} </ErrorLabel>
        )}
      </FormField>

      <FormField>
        <Label> Confirme sua senha </Label>
        <Input
          secureTextEntry={true}
          placeholder='Confirme a senha informada acima'
          error={errors.password_confirmation && touched.password_confirmation}
          value={values.password_confirmation}
          onChangeText={handleChange ('password_confirmation')}
          onBlur={handleBlur ('password_confirmation')}
          maxLength={16}
        />
        {errors.password_confirmation && touched.password_confirmation && (
          <ErrorLabel> {errors.password_confirmation} </ErrorLabel>
        )}
      </FormField>
    
      <FormField>
        <Label> Telefone (opcional) </Label>
        <MaskedInput
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
          }}
          placeholder='Insira um número de telefone'
          error={errors.phone && touched.phone}
          value={values.phone}
          onChangeText={value => handleMaskedInputChange ('phone', value)}
          onBlur={handleBlur ('phone')}
          maxLength={15}
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
        {isSubmitting
          ? <ActivityIndicator color='#fff'/>
          : <Text style={{color: '#fff'}}>Cadastrar</Text>
        }
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
    password_confirmation: '',
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

    password_confirmation: Yup.string ()
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
    try {
      const response = await api.post ('/companies', values);
      const { data } = response;

      alert (data.message);
      props.navigation.navigate ('Login');
    } catch (error) {
      setSubmitting (false);

      error.status 
      ? setErrors ({message: error.response.data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  },
}) (CompanyForm);
