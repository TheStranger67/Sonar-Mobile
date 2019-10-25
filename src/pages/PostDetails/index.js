import React, { useState, useEffect } from 'react';
import { ActivityIndicator, InteractionManager } from 'react-native';
import api from '../../services/api';
import Post from '../../components/Post';
import Rating from '../../components/Rating';

import {
  Container,
  FlatList,
  Separator,
  EmptyItem,
  LoadingMore,
  ListFooter,
  Text,
} from './styles';

export default function PostDetails ({ navigation }) {
  const [ post, setPost ] = useState ({});
  const [ ratings, setRatings ] = useState ([]);
  const [ loadingPost, setLoadingPost ] = useState (true);
  const [ loadingRatings, setLoadingRatings ] = useState (true);
  const [ loadingMore, setLoadingMore ] = useState (false);
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);
  const [ loadingPage, setLoadingPage ] = useState (true);
  const postID = navigation.getParam ('pid', null);

  useEffect (() => {
    InteractionManager.runAfterInteractions (() => {
      setLoadingPage (false);
      getPost ();
    });
  }, []);

  const getPost = async () => {
    setLoadingPost (true);
    try {
      const response = await api.get (`/posts/${postID}`);
      const { data } = response;

      setPost (data);
      setLoadingPost (false);
      getRatings ();
    } catch (error) {
      console.log (error);
    }
  }


  const getRatings = async (pageNumber = page) => {
    if (lastPage && pageNumber > lastPage) return;
    if (pageNumber > 1) setLoadingMore (true);
    setLoadingRatings (true);

    try {
      const response = await api.get (
        `/posts/${postID}/ratings?page=${pageNumber}`
      );
      const { data, lastPage } = response.data;

      pageNumber > 1 ? setRatings ([...ratings, ...data]) : setRatings (data);
      setPage (pageNumber + 1);
      setLastPage (lastPage);
      setLoadingRatings (false);
      setLoadingMore (false);
    } catch (error) {
      console.log (error);
    }
  }

  const separator = () => <Separator/>;

  const emptyList = () => {
    if (loadingRatings) return null;

    return (
      <EmptyItem>
        <Text>
          Ainda não há avaliações nessa publicação
        </Text>
      </EmptyItem>
    );
  }
  
  return (
    <Container>
      {!loadingPage && (
        loadingPost ? 
          <EmptyItem>
            <LoadingMore/>
          </EmptyItem>
        : 
          <>
            <Post data={post}/>
            <FlatList 
              data={ratings}
              keyExtractor={rating => String (rating.id)}
              renderItem={({ item }) => (
                <Rating data={item}/>
              )}
              ItemSeparatorComponent={separator}
              ListEmptyComponent={emptyList}
              ListFooterComponent={
                loadingMore && page > 1 ? <LoadingMore/> : <ListFooter/>
              }
              refreshing={loadingRatings}
              onRefresh={() => getPosts ()}
              onEndReached={() => getRatings ()}
              onEndReachedThreshold={0.15}
            />
          </>
        )}
    </Container>
  );
}
