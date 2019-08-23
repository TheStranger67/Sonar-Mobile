import React, { useState, useEffect } from 'react';
import { StyleSheet, StatusBar, Text, View} from 'react-native';
import api from '../../services/api';
import { Container } from './styles';

export default function Main () {
  const [ posts, setPosts ] = useState ([]);

  useEffect (() => {
    loadPosts ();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await api.get ('/posts');
      const { result } = response.data;
      setPosts (result);
    } catch (err) {
      console.log (err);
    };
  }

  return (
    <Container>
      <StatusBar translucent={false} backgroundColor={'#151416'}/>
      {posts.map (post => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.userName}> {post.user_name} </Text>
          <Text style={styles.desc}> {post.desc} </Text>
        </View>
      ))}
    </Container>
  );
}

const styles = StyleSheet.create ({
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  post: {
    backgroundColor: '#323035',
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    width: '90%'
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    marginBottom: 10
  },
  desc: {
    color: '#eee'
  }
});