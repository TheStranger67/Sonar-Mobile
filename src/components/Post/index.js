import React from 'react';
import { View } from 'react-native' 
import download from 'downloadjs';

import { 
  Container,
  Header,
  Title,
  SubTitle,
  Description,
  PrimaryText,
  SecondaryText,
  Strong,
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
    console.log (data)
    download (data, lyric.filename);
  }
  
  return (
    <Container>
      <Header>
        <Title> {post.user.name} </Title>
      </Header>
      <Description>
        <SecondaryText> {post.desc} </SecondaryText>
      </Description>
      <View>
        {post.songs.length > 0 && (
          <PostItem>
            <SubTitle> Música </SubTitle>

            <Content>
              <Strong> Nome: </Strong>
              <SecondaryText> {post.songs[0].name} </SecondaryText>
            </Content>
            <Content>
              <Strong> Gênero musical: </Strong>
              <SecondaryText> {post.songs[0].genre} </SecondaryText>
            </Content>

            <DownloadButton
              onClick={() => handleSongDownload (post.songs[0])}
            > 
              <PrimaryText>
                Baixar
              </PrimaryText>
            </DownloadButton>
          </PostItem>
        )} 
        {post.lyrics.length > 0 && (
          <PostItem>
            <SubTitle> Letra </SubTitle>

            <Content>
              <Strong> Nome: </Strong>
              <SecondaryText> {post.lyrics[0].name} </SecondaryText>
            </Content>
            <Content>
              <Strong> Gênero musical: </Strong>
              <SecondaryText> {post.lyrics[0].genre} </SecondaryText>
            </Content>
            
            <DownloadButton
              onClick={() => handleLyricDownload (post.lyrics[0])}
            > 
              <PrimaryText>
                Baixar
              </PrimaryText>
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
