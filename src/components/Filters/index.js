import React, { useState } from 'react';
import Modal from 'react-native-modal';

import {
  Container,
  Title,
  FilterGroup,
  Filter,
  FilterToggle,
  FilterButton,
  PrimaryText,
  SecondaryText,
  ButtonText,
} from './styles';

export default function Filters ({ visible, onChange, onClose }) {
  const [ filterBySongs, setFilterBySongs ] = useState (false);
  const [ filterByLyrics, setFilterByLyrics ] = useState (false);
  const [ orderByRatings, setOrderByRatings ] = useState (false);
  const [ orderByRecent, setOrderByRecent ] = useState (true);
  const [ orderByOldest, setOrderByOldest ] = useState (false);

  const filterPosts = () => {
    let content = '';
    let order = '';

    if (filterBySongs) content = '&content=songs';
    if (filterByLyrics) content = '&content=lyrics';
    if (filterBySongs && filterByLyrics) content = '&content=both';
    
    if (orderByRatings) order = '&order=ratings';
    if (orderByOldest) order = '&order=old';
    if (orderByRecent) order = '';

    onChange (content + order);
    onClose ();
  }

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
        <FilterGroup>
          <PrimaryText> Ordenar por... </PrimaryText>

          <Filter>
            <FilterToggle
              value={orderByRatings}
              onValueChange={value => {
                setOrderByRecent (false)
                setOrderByOldest (false)
                setOrderByRatings (value)
              }}
              thumbColor={orderByRatings ? '#82afe0' : '#ccc'}
            />
            <SecondaryText> Melhor avaliadas </SecondaryText>
          </Filter>

          <Filter>
            <FilterToggle
              value={orderByRecent}
              onValueChange={value => {
                setOrderByRecent (value)
                setOrderByOldest (false)
                setOrderByRatings (false)
              }}
              thumbColor={orderByRecent ? '#82afe0' : '#ccc'}
            />
            <SecondaryText> Mais recentes </SecondaryText>
          </Filter>
          
          <Filter>
            <FilterToggle
              value={orderByOldest}
              onValueChange={value => {
                setOrderByRecent (false)
                setOrderByOldest (value)
                setOrderByRatings (false)
              }}
              thumbColor={orderByOldest ? '#82afe0' : '#ccc'}
            />
            <SecondaryText> Mais antigas </SecondaryText>
          </Filter>
        </FilterGroup>

        <FilterGroup>
          <PrimaryText> Conteúdo </PrimaryText>

          <Filter>
            <FilterToggle
              value={filterBySongs}
              onValueChange={value => setFilterBySongs (value)}
              thumbColor={filterBySongs ? '#82afe0' : '#ccc'}
            />
            <SecondaryText> Músicas </SecondaryText>
          </Filter>

          <Filter>
            <FilterToggle
              value={filterByLyrics}
              onValueChange={value => setFilterByLyrics (value)}
              thumbColor={filterByLyrics ? '#82afe0' : '#ccc'}
            />
            <SecondaryText> Letras </SecondaryText>
          </Filter>
        </FilterGroup>
        <FilterButton onPress={filterPosts}>
          <ButtonText> Filtrar </ButtonText>
        </FilterButton>
      </Container>
    </Modal>
  );
}
