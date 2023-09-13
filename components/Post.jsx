import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled  from "styled-components/native"

const PostView = styled.View `
 flex-direction:row;
  padding:10px; 
  border-bottom-width:1px;
  border-bottom-color:rgba(0,0,0,0.3);
  border-bottom-style:solid;
`;

const PostDetails = styled.View `
  justify-content:center;
  flex:1;

`;

const PostImage = styled.Image `
  width:100px;
  height:80px;
  border-radius:20px;
  margin-right:15px;
`;
const PostTitle = styled.Text`
  font-size:17px;
  font-weight:600;
`;
const PostDate = styled.Text `
  font-size:12px;
  font-weight:600;
  color:rgba(0,0,0,0.3);
  margin-top:2px;
`;

const truncateTitle =(str)=>{
if (str.length > 50){
  return str.substring(0,50)+"...";
  
}
return str;
}

export default function Post ({title,date ,image,id}) {
    return (
        <>
    <PostView >
      <PostImage  source={{ uri:image}} />
      <PostDetails>
      <PostTitle>{truncateTitle(title)}</PostTitle>
      <PostDate>{id}</PostDate>
      </PostDetails>
     </PostView>
      
        </>
    );
};

