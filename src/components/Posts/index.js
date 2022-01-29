import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import { addPost } from '../../redux/userSlice';
import dateCurrentFormat from '../../utils/dateCurentFormat';
import {
  Container,
  ContainerPostDate,
  ContainerPostText,
  ContainerPostUser,
  Divider,
  InformationContainer,
  Post,
  PostContainer,
  PostDate,
  PostList,
  PostPrice,
  PostText,
  PostTitle,
  PostUser,
  PriceContainer,
  ScrollViewText,
} from './styles';

const Posts = () => {
  const { name } = useSelector((state) => state.user);
  const { text } = useSelector((state) => state.text);
  const { title } = useSelector((state) => state.title);
  const [posts, setPosts] = useState([]);

  // const newPost = {
  //   titlePost: title,
  //   textPost: text,
  //   date: dateCurrentFormat(),
  //   id: posts.length ? posts.length + 1 : 1
  // }

console.log(text)

  useEffect(() => {
    if (!text || !title) return;

    setPosts(addPost(posts));
  }, []);

  return (
    <Container>
      <PostContainer>
        <PostList
          data={posts}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFootComponentStyle={{
            height: 100,
          }}
          renderItem={({ item }) => (
            <Post>
              <PostTitle>{title}</PostTitle>
              <ContainerPostText>
                <ScrollView>
                  <PostText>{text}</PostText>
                </ScrollView>
              </ContainerPostText>
              <Divider />
              <InformationContainer>
                <ContainerPostDate>
                  <AntIcon name="calendar" color={'#fff'} size={20} />
                  <PostDate>{item.date}</PostDate>
                </ContainerPostDate>
                <ContainerPostUser>
                  <PostUser>{name.trim().split(' ', 1)}</PostUser>
                  <AntIcon name="user" color="#fff" size={20} />
                </ContainerPostUser>
              </InformationContainer>
            </Post>
          )}
        />
      </PostContainer>
      <View style={{ marginBottom: 70 }}></View>
    </Container>
  );
};

export default Posts;
