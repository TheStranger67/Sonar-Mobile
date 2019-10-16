import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  Container,
  Content,
  ContentBox,
  ContentIcon,
  PrimaryText,
  DownloadButton,
} from './styles';

export default function PostItem  ({ item, type }) {
  const [ loading, setLoading ] = useState (false);

  const handleDownload = async () => {
    setLoading (true)
    let url = '';

    switch (type) {
      case 'song': url = `/songs/${item.id}`; break;
      case 'lyric': url = `/lyrics/${item.id}`; break;
      default: break;
    }

    const response = await api.get (url, {responseType: 'blob'});
    const { data } = response
    setLoading (false)

    download (data, item.filename);
  }

  return (
    <Container>
      <ContentBox>
        <Content>
          {type === 'song' && (
            <ContentIcon name='music' size={17} color='#fff'></ContentIcon>
          )}
          {type === 'lyric' && (
            <ContentIcon name='file-text' size={15} color='#fff'></ContentIcon>
          )}
          <PrimaryText>{item.name}</PrimaryText>
        </Content>
        <Content>
          <ContentIcon name='headphones' size={17} color='#fff'></ContentIcon>
          <PrimaryText>{item.genre}</PrimaryText>
        </Content>
      </ContentBox>
      <DownloadButton onPress={handleDownload}>
        {loading
          ? <ActivityIndicator color='#fff'/>
          : <Icon name='download' size={17} color='#fff'></Icon>
        }
      </DownloadButton>
    </Container>
  );
}
