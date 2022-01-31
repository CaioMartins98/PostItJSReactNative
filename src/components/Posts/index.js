import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { removePost } from '../../redux/userSlice';
import dateCurrentFormat from '../../utils/dateCurentFormat';
import EmptyPost from '../EmptyPost';
// import FontIcon from 'react-native-vector-icons/FontAwesome'
import {
  Container,
  ContainerPostDate,
  ContainerPostText,
  ContainerPostUser,
  ContainerScroll,
  Divider,
  HeaderPost,
  IconContainer,
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
const Posts = ({ postData }) => {
  
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removePost(id));
  };

  console.log(postData, 'postDate');

  return (
    <Container>
      
        <PostContainer>
          <Post>
            <HeaderPost>
              <PostTitle>{postData.titlePost}</PostTitle>
              <IconContainer>
                <AntIcon
                  onPress={() => {
                    handleRemove(postData.id);
                  }}
                  name="close"
                  color="#fff"
                  size={20}
                />
              </IconContainer>
            </HeaderPost>
            <ContainerPostText>
              <ScrollView>
                <PostText>{postData.textPost}</PostText>
              </ScrollView>
            </ContainerPostText>
            <Divider />
            <InformationContainer>
              <ContainerPostDate>
                <AntIcon name="calendar" color={'#fff'} size={20} />
                <PostDate>{postData.datePost}</PostDate>
              </ContainerPostDate>
              <ContainerPostUser>
                <PostUser>{postData.namePost.trim().split(' ', 1)}</PostUser>
                <AntIcon name="user" color="#fff" size={20} />
              </ContainerPostUser>
            </InformationContainer>
          </Post>
        </PostContainer>
 
    </Container>
  );
};

export default Posts;
