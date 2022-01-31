import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';
import dateCurrentFormat from '../../utils/dateCurentFormat';
import EmptyPost from '../EmptyPost';
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
  PostText,
  PostTitle,
  PostUser,
} from './styles';

//.trim().split(' ', 1)
const Posts = ({ nameP, textP, titleP }) => {
  const date = dateCurrentFormat();
  const { text } = useSelector((state) => state.text);
  const { title } = useSelector((state) => state.title);
  const { name } = useSelector((state) => state.user);
  const [posts, setPosts] = useState([{title, text, name}]);
  return (
    <Container>
      <PostContainer>
        <PostList
          data={posts}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<EmptyPost />}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          render={({ item }) => (
            <Post>
              <PostTitle>{item.title}</PostTitle>
              <ContainerPostText>
                <ScrollView>
                  <PostText>{item.text}</PostText>
                </ScrollView>
              </ContainerPostText>
              <Divider />
              <InformationContainer>
                <ContainerPostDate>
                  <AntIcon name="calendar" color={'#fff'} size={20} />
                  <PostDate>{date}</PostDate>
                </ContainerPostDate>
                <ContainerPostUser>
                  <PostUser>{item.name}</PostUser>
                  <AntIcon name="user" color="#fff" size={20} />
                </ContainerPostUser>
              </InformationContainer>
            </Post>
          )}
        ></PostList>
      </PostContainer>
    </Container>
  );
};

export default Posts;
