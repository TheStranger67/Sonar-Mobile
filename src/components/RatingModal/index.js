import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';
import { getToken } from '../../services/auth';
import Modal from 'react-native-modal';
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

export default function RatingModal ({ visible, onClose, postid }) {
  const [ value, setValue ] = useState (0);
  const [ comment, setComment ] = useState ('');
  const [ isSubmitting, setSubmitting ] = useState (false);

  const handleSubmit = async () => {
    try {
      setSubmitting (true)
      await api.put (`/posts/${postid}/ratings`, {value}, {
        headers: {
          'Authorization': `Bearer ${await getToken ()}`,
        }
      });
      setSubmitting (false);
      onChange (value);
      onClose ();
    } catch (error) {
      console.log (error)
    }
  }

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      hideModalContentWhileAnimating={true}
      swipeDirection={'up'}
    >
      <Container>
        <Title>Avaliar publicação</Title>      
        <RatingContainer>
          <Rating
            defaultRating={value}
            onFinishRating={value => setValue (value)}
            showRating={false}
            selectedColor='#E6C229'
            size={24}
          />
          <RatingLabel>
            {value > 0 ? value : ''}
          </RatingLabel>
        </RatingContainer>
        <TextField
          placeholder='Escreva um comentário...'
          value={comment}
          multiline
          numberOfLines={4}
          maxLength={512}
          onChange={e => setComment (e.target.value)}
        />
        <Footer>
          <RateButton onPress={handleSubmit}>
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
    </Modal>
  );
}
