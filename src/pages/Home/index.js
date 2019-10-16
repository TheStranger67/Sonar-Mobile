import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Post from '../../components/Post';
import Icon from 'react-native-vector-icons/FontAwesome';
import Filters from '../../components/Filters';

import {
  Container,
  FlatList,
  BarDiv,
  SearchBar,
  FiltersButton,
  Separator,
  EmptyItem,
  LoadingMore,
  ListFooter,
  Text,
} from './styles';

export default function Main () {
  const [ posts, setPosts ] = useState ([]);
  const [ loading, setLoading ] = useState (true);
  const [ loadingMore, setLoadingMore ] = useState (false);
  const [ modalVisible, setModalVisible ] = useState (false);
  const [ filters, setFilters ] = useState ('');
  const [ query, setQuery ] = useState ('');
  const [ page, setPage ] = useState (1);
  const [ lastPage, setLastPage ] = useState (0);

  useEffect (() => {
    getPosts ();
  }, []);

  useEffect (() => {
    setLoading (true);
    getPosts (1, filters);
  }, [filters]);

  const getPosts = async (pageNumber = page, _filters = filters) => {
    if (lastPage && pageNumber > lastPage) return;

    setLoadingMore (true);
    try {
      const response = await api.get (`/posts?page=${pageNumber}${_filters}`);
      const { data, lastPage } = response.data;

      pageNumber > 1 ? setPosts ([...posts, ...data]) : setPosts (data);
      setPage (pageNumber + 1);
      setLastPage (lastPage);
      setLoading (false);
      setLoadingMore (false);
    } catch (error) {
      console.log (error.response.data);
    }
  }

  const filterPosts = () => {
    return posts.filter (post => {
      const { desc, user, songs, lyrics } = post;
      return ((user.name && standardize (user.name).indexOf (standardize (query)) >= 0)
        || (desc && standardize (desc).indexOf (standardize (query)) >= 0)
        || (songs.length > 0 && standardize (songs[0].name).indexOf (standardize (query)) >= 0)
        || (songs.length > 0 && standardize (songs[0].genre).indexOf (standardize (query)) >= 0)
        || (lyrics.length > 0 && standardize (lyrics[0].name).indexOf (standardize (query)) >= 0)
        || (lyrics.length > 0 && standardize (lyrics[0].genre).indexOf (standardize (query)) >= 0)
      );
    });
  }

  const standardize = text => {
    return text
      .toLowerCase ()
      .normalize ('NFD')
      .replace (/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '')
  }

  const closeModal = () => {
    setModalVisible (false);
  }

  const postList = filterPosts ();
  const separator = () => <Separator/>;

  const emptyList = () => {
    if (loading) return null;

    if (query === '')
      return (
        <EmptyItem>
          <Text>
            Ainda não há postagens nessa categoria
          </Text>
        </EmptyItem>
      );
    else return (
      <EmptyItem>
        <Text>
          Não foi encontrado nenhum resultado para sua pesquisa
        </Text>
      </EmptyItem>
    );
  }

  return (
    <Container>
      <BarDiv>
        <SearchBar
          name='query'
          autoComplete='off'
          placeholder='Pesquisar conteudo'
          onChangeText={query => setQuery (query)}
        />
        <FiltersButton onPress={() => setModalVisible (true)}>
          <Icon name='sliders' size={20} color='#fff'></Icon>
        </FiltersButton>
      </BarDiv>
      <Filters
        visible={modalVisible}
        onChange={filters => setFilters (filters)}
        onClose={closeModal}
      />
      <FlatList 
        data={postList}
        keyExtractor={post => String (post.id)}
        renderItem={({ item }) => (
          <Post postData={item}/>
        )}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={emptyList}
        ListFooterComponent={
          loadingMore && page > 1 ? <LoadingMore/> : <ListFooter/>
        }
        refreshing={loading}
        onRefresh={getPosts}
        onEndReached={() => getPosts ()}
        onEndReachedThreshold={0.15}
      />
    </Container>
  );
}
