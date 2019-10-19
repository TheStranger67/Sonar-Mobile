import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { isAuthenticated, getUserID } from '../../services/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReadMore from 'react-native-view-more-text';
import PostItem from './PostItem';
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
  Footer,
  FooterDiv,
  RatingButton,
  ButtonText,
} from './styles';

export default function Post ({ postData : post }) {
  const [ ratingModalVisible, setRatingModalVisible ] = useState (false);
  const [ userRating, setUserRating ] = useState (null);

  useEffect (() => {
    setUserRating (getUserRating ());
  }, []);
  
  const belongsToUser = () => getUserID () === String (post.user.id);
  
  const getUserRating = () => {
    const rating = post.ratings.find (rating => rating.user_id !== getUserID ());
    if (!rating) return null;
    return rating.value;
  }

  const renderViewMore = handlePress => {
    return <Text style={{color: '#007bff'}} onPress={handlePress}>mais</Text>
  }

  const renderViewLess = handlePress => {
    return <Text style={{color: '#007bff'}} onPress={handlePress}>menos</Text>
  }
  
  return (
    <Container>
      <Header>
        <UserName>{post.user.name}</UserName>
        <View style={{flexDirection: 'row'}}>
          {post.ratings.length > 0 && (
            <Rating onPress={() => alert (post.id)}>
              <RatingCount>        
                {`(${post.ratings.length})`}
              </RatingCount>
              <Icon name='star' size={17} color='#e6c229'></Icon>
              <AverageRating>{post.average_rating}</AverageRating>
            </Rating>
          )}
          {belongsToUser () && <PostOptions postID={post.id}/>}
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
        {post.songs.length > 0 && <PostItem item={post.songs[0]} type='song'/>} 
        {post.lyrics.length > 0 && <PostItem item={post.lyrics[0]} type='lyric'/>}
      </View>
      {isAuthenticated () && !belongsToUser () && (
        <Footer>
          {userRating ?
            <FooterDiv>
              <Icon name='star' size={17} color='#e6c229'></Icon>
              <ButtonText>{userRating}</ButtonText>
            </FooterDiv>
            :
            <RatingButton onPress={() => setRatingModalVisible (true)}>
              <Icon name='star' size={17} color='#e6c229'></Icon>
              <ButtonText>Avaliar</ButtonText>
            </RatingButton>
          }
          <RatingModal
            visible={ratingModalVisible}
            onChange={value => setUserRating (value)}
            onClose={() => setRatingModalVisible (false)}
            postid={post.id}
          />
        </Footer>
      )}
    </Container>
  );
}
