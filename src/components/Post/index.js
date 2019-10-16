import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { getUserID } from '../../services/auth';
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
  RatingButton,
  ButtonText,
} from './styles';

export default function Post ({ postData : post }) {
  const [ belongsToUser, setBelongsToUser ] = useState (false);
  const [ ratingModalVisible, setRatingModalVisible ] = useState (false);
  const [ userRating, setUserRating ] = useState (null);

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
        {post.songs.length > 0 && <PostItem item={post.songs[0]} type='song'/>} 
        {post.lyrics.length > 0 && <PostItem item={post.lyrics[0]} type='lyric'/>}
      </View>
      <Footer>
        <RatingButton onPress={() => setRatingModalVisible (true)}>
          <Icon name='star' size={17} color='#e6c229'></Icon>
          <ButtonText>Avaliar</ButtonText>
        </RatingButton>
      </Footer>
      <RatingModal
        visible={ratingModalVisible}
        onChange={value => setUserRating (value)}
        onClose={closeRatingModal}
        postid={post.id}
      />
    </Container>
  );
}
