import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import download from 'downloadjs';

import { 
  Container,
  Header,
  Rating,
  RatingCount,
  AverageRating,
  Title,
  Description,
  SecondaryText,
  ContentIcon,
  ContentBox,
  Content,
  PostItem,
  DownloadButton
} from './styles';

export default function Post ({ postData : post }) {
  const handleSongDownload = async song => {
    const response = await api.get (`/songs/${song.id}`, {responseType: 'blob'});
    const { data } = response
    download (data, song.filename);
  }

  const handleLyricDownload = async lyric => {
    const response = await api.get (`/lyrics/${lyric.id}`, {responseType: 'blob'});
    const { data } = response;
    download (data, lyric.filename);
  }
  
  return (
    <Container>
      <Header>
        <Title> {post.user.name} </Title>
        <Rating>
          {post.ratings.length > 0 ?
            <>
              <RatingCount>        
                {post.ratings.length > 1 
                  ? `${post.ratings.length} avaliações`
                  : `1 avaliação`
                }
              </RatingCount>
              <Icon name='star' size={17} color='#e6c229'></Icon>
              <AverageRating> {post.average_rating} </AverageRating>
            </>
          : null}
        </Rating>
      </Header>

      <Description>
        <SecondaryText> {post.desc} </SecondaryText>
      </Description>

      <View>
        {post.songs.length > 0 && (
          <PostItem>
            <ContentBox>
              <Content>
                <ContentIcon name='music' size={17} color='#fff'></ContentIcon>
                <SecondaryText> {post.songs[0].name} </SecondaryText>
              </Content>
              <Content>
                <ContentIcon name='headphones' size={17} color='#fff'></ContentIcon>
                <SecondaryText> {post.songs[0].genre} </SecondaryText>
              </Content>
            </ContentBox>
            
            <DownloadButton
              onClick={() => handleSongDownload (post.songs[0])}
            > 
              <Icon name='download' size={17} color='#fff'></Icon>
            </DownloadButton>
          </PostItem>
        )} 
        {post.lyrics.length > 0 && (
          <PostItem>
            <ContentBox>
              <Content>
                <ContentIcon name='file-text' size={15} color='#fff'></ContentIcon>
                <SecondaryText> {post.lyrics[0].name} </SecondaryText>
              </Content>
              <Content>
                <ContentIcon name='headphones' size={17} color='#fff'></ContentIcon>
                <SecondaryText> {post.lyrics[0].genre} </SecondaryText>
              </Content>
            </ContentBox>
            
            <DownloadButton
              onClick={() => handleLyricDownload (post.lyrics[0])}
            > 
              <Icon name='download' size={17} color='#fff'></Icon>
            </DownloadButton>
          </PostItem>
        )}
      </View>
    </Container>
  );
}

/*
  post {
    date
    desc
    id
    lyrics[].genre
    lyrics[].name
    lyrics[].path
    lyrics[].filename
    songs[].genre
    songs[].name
    songs[].path
    songs[].filename
    user.name
  }
*/
