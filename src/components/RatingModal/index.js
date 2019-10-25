import React from 'react';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import Modal from 'react-native-modal';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { AirbnbRating as Rating } from 'react-native-ratings';

import {
  Container,
  RatingContainer,
  Title,
  RatingLabel,
  TextField,
  Footer,
  RateButton,
  ButtonText,
  Cancel,
} from './styles';

export default function RatingModal ({ visible, onChange, onClose, postid }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      hideModalContentWhileAnimating={true}
      swipeDirection={'up'}
    >
      <Formik
        initialValues={{
          value: 0,
          comment: '',
        }}

        onSubmit={async (values, { setSubmitting, setErrors }) => {
          try {
            await api.put (`/posts/${postid}/ratings`, values, {
              headers: {
                'Authorization': `Bearer ${getToken ()}`,
              }
            });
            setSubmitting (false);
            onChange (values.value);
            onClose ();
          } catch (error) {
            setSubmitting (false);
            const { data } = error.response || null;

            data
            ? setErrors ({message: data.message})
            : setErrors ({message: 'A comunicação com o servidor falhou'});
          }
        }}

        validationSchema={Yup.object ().shape ({
          value: Yup.number ()
            .moreThan (0, 'Não é possível enviar uma avaliação vazia'),
        })}

        render={formikProps => {
          const {
            values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
          } = formikProps;

          return (
            <Container>
              <Title>Avaliar publicação</Title>      
              <RatingContainer>
                <Rating
                  defaultRating={values.value}
                  onFinishRating={value => setFieldValue ('value', value)}
                  showRating={false}
                  selectedColor='#E6C229'
                  size={24}
                />
                <RatingLabel>
                  {values.value > 0 ? values.value : ''}
                </RatingLabel>
              </RatingContainer>
              <TextField
                placeholder='Escreva um comentário...'
                value={values.comment}
                multiline
                numberOfLines={4}
                onChangeText={handleChange ('comment')}
                onBlur={handleBlur ('comment')}
                maxLength={512}
              />
              <Footer>
                <RateButton disabled={isSubmitting} onPress={handleSubmit}>
                  {isSubmitting
                    ? <ActivityIndicator color='#fff'/>
                    : <ButtonText>Enviar</ButtonText>
                  }    
                </RateButton>
                <Cancel onPress={onClose}>
                  <ButtonText>Cancelar</ButtonText>
                </Cancel>
              </Footer>
            </Container>
          );
        }}
      />
    </Modal>
  );
}
