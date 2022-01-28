import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContainerNewPost = styled.View`
    flex-direction: column;
    /* align-items: center; */
    justify-content: flex-start;
    border: 2px solid #5227c7;
    border-radius: 4px;
    background: #555;
    height: 560px;
    width: 340px;
`

export const NewPostTitle = styled.Text`
    text-transform: uppercase;
    color:#fff;
    font-size: 24px;
    font-family: 'Poppins-Bold';
    padding: 20px 0 0 90px;
    margin-bottom: 120px;
    
`
export const TitleLabel = styled.Text`
    color:#fff;
    font-size: 20px;
    font-family: 'Poppins-Bold';
    margin-left: 10px;
`

export const InputTitleField = styled(TextInput)`
    background: #6666;
    height: 47px;
    width: 310px;
    color: #fff;
    font-family: 'Poppins-Regular';
    font-size: 18px;
    margin-bottom: 50px;
    margin-left: 10px;
`
export const DescriptionLabel = styled.Text`
    color:#fff;
    font-size: 20px;
    font-family: 'Poppins-Bold';
    margin-left: 10px;
    /* margin-top: 40px; */
`

export const InputDescriptionField = styled(TextInput)`
    background: #6666;
    height: 190px;
    width: 310px;
    color: #fff;
    font-family: 'Poppins-Regular';
    font-size: 18px;
    margin-bottom: 50px;
    margin-left: 10px;
`

export const ButtonContainer = styled.View`
    bottom: 10px;
    position: absolute;
    justify-content: center;
    align-items: center;
    
`

export const ButtonField = styled.TouchableOpacity`
    border-radius: 8px;
    background-color: #5227c7;
    width: 340px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 12px;
`
export const ButtonText = styled.Text`
    color: #fff;
    font-family: 'Poppins-Bold';
    text-transform: uppercase;
    font-size: 18px;
  margin-left: 100px;
    /* position: absolute; */
    
`