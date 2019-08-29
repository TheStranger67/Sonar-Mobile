import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Post from '../../components/Post';
import {
  Container,
  FlatList,
  SearchBar,
  Separator,
  EmptyItem,
  Text,
} from './styles';

export default function Main () {
  const [ posts, setPosts ] = useState ([]);
  const [ loading, setLoading ] = useState (true);
  const [ query, setQuery ] = useState ('');

  useEffect (() => {
    loadPosts ();
  }, []);

  const loadPosts = async () => {
    setLoading (true);
    try {
      const response = await api.get ('/posts');
      const { result } = response.data;
      setPosts (result);
      setLoading (false);
    } catch (err) {
      setLoading (false);
    };
  }

  const filterPosts = () => {
    return posts.filter (post => {
      const { user_name, desc, song_name, song_genre, lyrics_name, lyrics_genre } = post;
      return ((user_name && standardize (user_name).indexOf (standardize (query)) >= 0)
        || (desc && standardize (desc).indexOf (standardize (query)) >= 0)
        || (song_name && standardize (song_name).indexOf (standardize (query)) >= 0)
        || (song_genre && standardize (song_genre).indexOf (standardize (query)) >= 0)
        || (lyrics_name && standardize (lyrics_name).indexOf (standardize (query)) >= 0)
        || (lyrics_genre && standardize (lyrics_genre).indexOf (standardize (query)) >= 0)
      );
    });
  }

  const standardize = text => {
    return text
      .toLowerCase ()
      .normalize ('NFD')
      .replace (/[\u0300-\u036f|\u00b4|\u0060|\u005e|\u007e]/g, '')
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
      <SearchBar
        name='query'
        autoComplete='off'
        placeholder='Pesquisar conteudo'
        onChangeText={query => setQuery (query)}
      />

      <FlatList 
        data={postList}
        keyExtractor={post => String (post.id)}
        renderItem={({ item }) => (
          <Post postData={item}/>
        )}
        ItemSeparatorComponent={separator}
        ListEmptyComponent={emptyList}
        refreshing={loading}
        onRefresh={loadPosts}
      />
    </Container>
  );
}
