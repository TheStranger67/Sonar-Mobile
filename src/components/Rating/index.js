import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ReadMore from 'react-native-view-more-text';

import { 
  Container,
  Header,
  Rating,
  AverageRating,
  UserName,
  Comment,
} from './styles';

export default function Post ({ data : rating }) {
  const renderViewMore = handlePress => (
    <Text style={{color: '#007bff'}} onPress={handlePress}>
      mais
    </Text>
  );

  const renderViewLess = handlePress => (
    <Text style={{color: '#007bff'}} onPress={handlePress}>
      menos
    </Text>
  );
  
  return (
    <Container>
      <Header>
        <UserName>{rating.user.name}</UserName>
        <View style={{flexDirection: 'row'}}>
          <Rating>
            <Icon name='star' size={17} color='#e6c229'></Icon>
            <AverageRating>{rating.value}</AverageRating>
          </Rating>
        </View>
      </Header>
      {rating.comment && (
        <Comment>
          <ReadMore
            numberOfLines={2}
            renderViewMore={renderViewMore}
            renderViewLess={renderViewLess}
            textStyle={{lineHeight: 18, color: '#cecece'}}
          >
            <Text>{rating.comment}</Text>
          </ReadMore>
        </Comment>
      )}
    </Container>
  );
}
