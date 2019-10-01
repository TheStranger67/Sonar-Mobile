import React, { useState } from 'react';
import Modal from 'react-native-modal';

import {
  Container,
  Title,
  RateButton,
  ButtonText,
} from './styles';

export default function RatingModal ({ visible, onClose }) {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      hideModalContentWhileAnimating={true}
      useNativeDriver={true}
      swipeDirection={'up'}
    >
      <Container>
        <Title> Filtrar publicações </Title>

        <RateButton>
          <ButtonText> Filtrar </ButtonText>
        </RateButton>
      </Container>
    </Modal>
  );
}
