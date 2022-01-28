import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;


export const PostContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 40px;
  border-radius: 4px;
  height: 200px;
`;

export const PostList = styled(FlatList).attrs({
  numColumns: 1,
})`
  flex: 1;
  padding: 0px 10px;
/* height: 100%; */
`;

export const Post = styled.View`
  flex: 1;
  margin: 8px;
  background: #5555;
  padding: 12px 0px;
  border-radius: 4px;
  border: 2px solid #5227c7;
  height: 340px;
`;



export const PostTitle = styled.Text`
  color: #fff;
  font-size: 22px;
  font-family: 'Poppins-Regular';
  margin-top: 5px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 3.5px;
  text-align: center;
`;

export const ContainerPostText = styled.View`
  height: 240px;
  /* background: red; */
`


export const PostText = styled.Text`
color: #fff;
font-family: 'Poppins-Regular';
font-size: 20px;
margin-left: 5px;
`;

export const Divider = styled.View`
  border: 0.5px solid #f5f5f5;
  width: 340px;
  margin-left: 6px;
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: -5px;
 
  border-top: 2px;
  bottom: 0px;
  width: 340px;
  height: 50px;
  margin-left: 7px;
`;

export const ContainerPostDate = styled.View`
    width:125px;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`
 
export const PostDate = styled.Text`
  color: #f3f9ff;
  font-size: 17px;
  font-family: 'Poppins-Regular';
`;

export const ContainerPostUser = styled.View`
    width:90px;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
`

export const PostUser = styled.Text`
  color: #f3f9ff;
  font-size: 17px;
  font-family: 'Poppins-Regular';
`;