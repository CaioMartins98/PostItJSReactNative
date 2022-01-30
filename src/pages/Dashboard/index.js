import React, { useState } from 'react';
import { View, Text } from 'react-native';
import EmptyPost from '../../components/EmptyPost';
import { ButtonContainer, ButtonField, ButtonText, Container } from './styles';
import NewPostIcon from '../../assets/NewPost.png';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Posts from '../../components/Posts';
import NewPost from '../../components/NewPost';
import dateCurrentFormat from '../../utils/dateCurentFormat';
import { useDispatch, useSelector } from 'react-redux';
import { addText, addTitle } from '../../redux/userSlice';

const Dashboard = () => {
  const { text } = useSelector((state) => state.text);
  const { title } = useSelector((state) => state.title);
  const { name } = useSelector((state) => state.user);

  const [descriptionValue, setDescriptionValue] = useState('');
  const [titleValue, setTitleValue] = useState('');

  const [messageTitle, setMessageTitle] = useState('');
  const [messageText, setMessageText] = useState('');

  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const text = descriptionValue;
    const title = titleValue;
    dispatch(addTitle(title));
    dispatch(addText(text));

    const newPost = {
      titlePost: title,
      textPost: text,
      datePost: dateCurrentFormat(),
      namePost: name,
      id: posts.length ? posts.length + 1 : 1,
    };

    setPosts((prevState) => [...prevState, newPost]);
    validate();
  };

  const handleChangeTitle = (event) => {
    setTitleValue(event);
  };
  const handleChangeText = (event) => {
    setDescriptionValue(event);
  };

  const validate = () => {
    const text = descriptionValue;
    const title = titleValue;

    if (title === '' && text === '') {
      setMessageTitle('Campo de título obrigatório*');
      setMessageText('Campo de descrição obrigatório*');
    } else {
      navigation.navigate('Dashboard');
    }
  };

  console.log(posts);
  return (
    <>
      <Container>
        <Posts />
        <ButtonContainer>
          <ButtonField
            onPress={() => {
              navigation.navigate('NewPost');
            }}
          >
            <ButtonText>Novo Post</ButtonText>
            <FeatherIcon
              name="edit-3"
              color="#fff"
              size={20}
              style={{ marginLeft: 80 }}
            />
          </ButtonField>
        </ButtonContainer>
      </Container>

      {/* <NewPost
        handleChangeText={handleChangeText}
        handleChangeTitle={handleChangeTitle}
        handleSubmit={handleSubmit}
      /> */}

      {posts.map((item) => {
        <Posts
          nameP={item.namePost}
          textP={item.textPost}
          titleP={item.titlePost}
        />;
      })}
    </>
  );
};

export default Dashboard;
