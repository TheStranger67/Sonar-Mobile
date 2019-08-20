import React, {Component} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import api from '../services/api';

export default class Main extends Component {
  constructor () {
    super ();
    this.state = {
      posts: [],
    }
  }

  componentDidMount = () => {
    this.loadPosts ();
  }

  loadPosts = async () => {
    try {
      const response = await api.get ('/recent-posts');
      const { result } = response.data;
      this.setState ({posts: result}, () => console.log (this.state));
    } catch (err) {
      console.log (err);
    };
  }
  
  render () {
    const { posts } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>CYKA BLYAT!</Text>
        {posts.map (post => (
          <View key={post.id} style={styles.post}>
            <Text style={styles.userName}> {post.user_name} </Text>
            <Text style={styles.desc}> {post.desc} </Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(73, 77, 110)',
  },
  welcome: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  post: {
    backgroundColor: 'rgb(52, 56, 82)',
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