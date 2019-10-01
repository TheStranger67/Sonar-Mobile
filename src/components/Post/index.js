import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getUserID } from '../../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReadMore from 'react-native-view-more-text';
import download from 'downloadjs';
import PostOptions from '../PostOptions';
import RatingModal from '../RatingModal';

import { 
  Container,
  Header,
  Rating,
  RatingCount,
  AverageRating,
  UserName,
  Description,
  SecondaryText,
  ContentIcon,
  ContentBox,
  Content,
  PostItem,
  DownloadButton
} from './styles';

export default function Post ({ postData : post }) {
  const [ belongsToUser, setBelongsToUser ] = useState (false);
  const [ ratingModalVisible, setRatingModalVisible ] = useState (false);

  useEffect (() => {
    validateBelongsToUser ();
  }, []);

  const validateBelongsToUser = async () => {
    setBelongsToUser (await getUserID () === post.user.id.toString ());
  }

  const closeRatingModal = () => {
    setRatingModalVisible (false);
  }

  const renderViewMore = handlePress => {
    return <Text style={{color: '#007bff'}} onPress={handlePress}>mais</Text>
  }

  const renderViewLess = handlePress => {
    return <Text style={{color: '#007bff'}} onPress={handlePress}>menos</Text>
  }

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
        <UserName>{post.user.name}</UserName>
        <View style={{flexDirection: 'row'}}>
          <Rating>
            {post.ratings.length > 0 && (
              <>
                <RatingCount>        
                  {post.ratings.length > 1 
                    ? `${post.ratings.length} avaliações`
                    : `${post.ratings.length} avaliação`
                  }
                </RatingCount>
                <Icon name='star' size={17} color='#e6c229'></Icon>
                <AverageRating>{post.average_rating}</AverageRating>
              </>
            )}
          </Rating>

          <RatingModal 
            visible={ratingModalVisible}
            onChange={filters => setFilters (filters)}
            onClose={closeRatingModal}
          />

          {belongsToUser && (
            <PostOptions postID={post.id}/>
          )}
        </View>
      </Header>

      <Description>
        <ReadMore
          numberOfLines={2}
          renderViewMore={renderViewMore}
          renderViewLess={renderViewLess}
          textStyle={{lineHeight: 18, color: '#cecece'}}
        >
          <Text>{post.desc}</Text>
        </ReadMore>
      </Description>

      <View>
        {post.songs.length > 0 && (
          <PostItem>
            <ContentBox>
              <Content>
                <ContentIcon name='music' size={17} color='#fff'></ContentIcon>
                <SecondaryText>{post.songs[0].name}</SecondaryText>
              </Content>
              <Content>
                <ContentIcon name='headphones' size={17} color='#fff'></ContentIcon>
                <SecondaryText>{post.songs[0].genre}</SecondaryText>
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
                <SecondaryText>{post.lyrics[0].name}</SecondaryText>
              </Content>
              <Content>
                <ContentIcon name='headphones' size={17} color='#fff'></ContentIcon>
                <SecondaryText>{post.lyrics[0].genre}</SecondaryText>
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
