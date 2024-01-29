import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* <Image
          source={require('./assets/profile-pic.jpg')} // Add a profile picture
          style={styles.profilePic}
        /> */}
        <Text style={styles.username}>Your Name</Text>
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.status}>What's on your mind?</Text>
      </View>

      {/* Example Post */}
      <View style={styles.postContainer}>
        {/* <Image
          source={require('./assets/post-image.jpg')} // Add a post image
          style={styles.postImage}
        /> */}
        <Text style={styles.postText}>
          This is an example post. #ReactNative
        </Text>
      </View>

      {/* Add more posts as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  status: {
    fontSize: 16,
    color: '#333',
  },
  postContainer: {
    padding: 16,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  postText: {
    fontSize: 16,
    color: '#333',
  },
});

export default Home;
