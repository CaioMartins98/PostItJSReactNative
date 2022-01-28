import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import AntIcon from 'react-native-vector-icons/AntDesign';
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
  const [products, setProducts] = useState([
    { title: 'Título 1', id: '1', price: '27/01/2022', user: 'Caio Martins Dias' },
    { title: 'Título 2', id: '2', price: '27/01/2022', user: 'Pedro AAAAAA' },
    {
      title: 'Título 3',
      id: '3',
      price: '27/01/2022',
      user: 'Leandro Augusto Ramos Viera',
    },
    {
      title: 'Título 4',
      id: '4',
      price: '27/01/2022',
      user: 'Márcio da Rocha Dias',
    },
    {
      title: 'Título 5',
      id: '6',
      price: '27/01/2022',
      user: 'Kevin Neves de Souza',
    },
  ]);
  return (
    <Container>
      <PostContainer>
        <PostList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View />}
          ListFootComponentStyle={{
            height: 100,
          }}
          renderItem={({ item }) => (
            <Post>
              <PostTitle>{item.title}</PostTitle>
              <ContainerPostText>
                <ScrollView>
                  <PostText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque aliquet, massa eget sodales facilisis, sapien
                    nulla suscipit orci, sit amet lacinia metus magna ut odio.
                    Proin ut purus imperdiet, porttitor justo eget, tristique
                    lacus. 
                  </PostText>
                </ScrollView>
              </ContainerPostText>
              <Divider />
              <InformationContainer>
                <ContainerPostDate>
                  <AntIcon name="calendar" color={'#fff'} size={20} />
                  <PostDate>{item.price}</PostDate>
                </ContainerPostDate>
                <ContainerPostUser>
                  <PostUser>{item.user.trim().split(' ', 1)}</PostUser>
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
