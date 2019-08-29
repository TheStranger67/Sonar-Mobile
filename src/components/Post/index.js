import React from 'react';
import { View } from 'react-native' 
//import download from 'downloadjs';

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
  const handleDownload = (pathName, fileName) => {
    fetch ('/posts/download', {
      method: 'GET',
      headers: { 
        'Authorization': 'Bearer ' + localStorage.userToken,
        'path_name': pathName
      }
    })
    .then (res => {
      res.blob ()
      .then (res_blob => {
        download (res_blob, fileName);
      })
    }).catch (err => alert (err));
  }
  
  return (
    <Container>
      <Header>
        <Title> {post.user_name} </Title>
      </Header>
      <Description>
        <SecondaryText> {post.desc} </SecondaryText>
      </Description>
      <View>
        {post.song_name && (
          <PostItem>
            <SubTitle> Música </SubTitle>

            <Content>
              <Strong> Nome: </Strong>
              <SecondaryText> {post.song_name} </SecondaryText>
            </Content>
            <Content>
              <Strong> Gênero musical: </Strong>
              <SecondaryText> {post.song_genre} </SecondaryText>
            </Content>

            <DownloadButton
              onClick={() => {
                handleDownload (
                  post.song_path.split ('/').pop (),
                  post.song_filename
                )
              }}
            > 
              <PrimaryText>
                Baixar
              </PrimaryText>
            </DownloadButton>
          </PostItem>
        )} 
        {post.lyrics_name && (
          <PostItem>
            <SubTitle> Letra </SubTitle>

            <Content>
              <Strong> Nome: </Strong>
              <SecondaryText> {post.lyrics_name} </SecondaryText>
            </Content>
            <Content>
              <Strong> Gênero musical: </Strong>
              <SecondaryText> {post.lyrics_genre} </SecondaryText>
            </Content>
            
            <DownloadButton
              onClick={() => {
                handleDownload (
                  post.lyrics_path.split ('/').pop (),
                  post.lyrics_filename
                )
              }}
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
    lyrics_genre
    lyrics_name
    lyrics_path
    lyrics_filename
    song_genre
    song_name
    song_path
    song_filename
    user_name
  }
*/
