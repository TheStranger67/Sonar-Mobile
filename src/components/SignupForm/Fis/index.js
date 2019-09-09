import React from 'react';
import { View, Text, Picker } from 'react-native';
import api from '../../../services/api';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import RNPickerSelect from 'react-native-picker-select';

import {
  FormField,
  Label,
  Input,
  DateInput,
  Select,
  MaskedInput,
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
    setFieldValue,
    setFieldTouched,
  } = props;

  const handleMaskedInputChange = (field, value) => {
    const rawValue = getRawValue (value);
    setFieldValue (field, rawValue);
  }

  const handleSelectChange = (field, value) => {
    setFieldValue (field, value);
    setFieldTouched (field);
  }

  const getRawValue = value => {
    const regEx = /\(|\)| |\.|\/|-|/g;
    return value.replace (regEx, '');
  }

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
        <Label> CPF </Label>
        <MaskedInput
          type={'cpf'}
          placeholder='Digite o número de CPF'
          error={errors.cpf && touched.cpf}
          value={values.cpf}
          onChangeText={value => handleMaskedInputChange ('cpf', value)}
          onBlur={handleBlur ('cpf')}
          maxLength={14}
        />
        {errors.cpf && touched.cpf && (
          <ErrorLabel> {errors.cpf} </ErrorLabel>
        )}
      </FormField>
      
      <FormField>
        <Label> Senha </Label>
        <Input
          secureTextEntry={true}
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
        <Label> Sexo </Label>
        <RNPickerSelect
          placeholder={{label: 'Selecione uma opção', value: ''}}
          onValueChange={value => handleSelectChange ('gender', value)}
          useNativeAndroidPickerStyle={false}
          items={[
            { label: 'Masculino', value: 'M' },
            { label: 'Feminino', value: 'F' },
            { label: 'Outro', value: 'O' },
          ]}
          style={{
            inputAndroid: {
              color: '#fff',
              paddingVertical: 6,
              paddingHorizontal: 20,
              backgroundColor: '#212023',
              borderRadius: 25,
              textAlign: 'center',
              borderColor: '#D63230',
              borderWidth: errors.gender && touched.gender ? 1 : 0,
            },
            placeholder: {
              color: '#bebebe',
            },
          }}
        />
        {errors.gender && touched.gender && (
          <ErrorLabel> {errors.gender} </ErrorLabel>
        )}
      </FormField>
    
      <FormField>
        <Label> Data de nascimento </Label>
        <DateInput
          mode='date'
          format='DD/MM/YYYY'
          minDate='01/01/1900'
          maxDate='01/01/2010'
          confirmBtnText='Confirmar'
          cancelBtnText='Cancelar'
          placeholder='Selecione uma data'
          showIcon={false}
          error={errors.birth && touched.birth}
          date={values.birth}
          onDateChange={date => setFieldValue ('birth', date)}
          onCloseModal={handleBlur ('birth')}
        />
        {errors.birth && touched.birth && (
          <ErrorLabel> {errors.birth} </ErrorLabel>
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
          placeholder='Insira seu número de telefone'
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
        <Text style={{color: '#fff'}}>
          Cadastrar
        </Text>
      </Submit>
    </View>
  );
}

export default withFormik ({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    cpf: '',
    password: '',
    password_confirmation: '',
    gender: '',
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

    password_confirmation: Yup.string ()
      .required ('Preencha o campo de confirmação de senha')
      .oneOf ([Yup.ref ('password'), null], 'As duas senhas devem ser iguais'),

    gender: Yup.string ()
      .required ('Selecione um sexo'),

    birth: Yup.string ()
      .required ('Preencha o campo de data de nascimento'),
    
    phone: Yup.string ()
      .required ('Preencha o campo de telefone')
      .test ('validPhone', 'Insira um número de telefone válido', function (value) {
        const phoneExp = /\(|\)| |-/g;
        if (!value) return true;
        return value.replace (phoneExp, '').length >= 10;
      }),
  }),

  handleSubmit: async (values, { setSubmitting, setErrors, props }) => {
    const user = {
      ...values,
      birth: values.birth.split ('/').reverse ().join ('-')
    }

    try {
      const response = await api.post ('/users', user);
      const { data } = response;

      alert (data.message);
      props.navigation.navigate ('Login');
    } catch (error) {
      setSubmitting (false);
      const { data } = error.response || null;

      data
      ? setErrors ({message: data.message})
      : setErrors ({message: 'A comunicação com o servidor falhou'});
    }
  }, 
}) (SignupFisForm);
