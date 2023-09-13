import React from 'react';
import styled  from "styled-components/native"
import { StyleSheet,Alert, Text, View,FlatList, ActivityIndicator, RefreshControl,TouchableOpacity, ScrollView} from 'react-native';
import axios from 'axios';
import { Loading } from './Loading';
 
const DetailPostImage = styled.Image `
  width:100%;
  height:250px;
  border-radius:20px;
  margin-bottom :20px;
`;
const DetailPostTitle = styled.Text`
  text-aling:"center";
  font-size:18px;
  line-height:24px;
`;

export function DetailsPost({route,navigation}) {
    const{id ,title}= route.params; 
    const [isLoading ,setIsLoading]=React.useState(true);
    const [info ,setInfo]=React.useState();

 

const fetchPosts =()=>{
    setIsLoading(true)
    navigation.setOptions({title})
    axios.get(`https://64feee41f8b9eeca9e294dfe.mockapi.io/test1/${id}`)
    .then(({data})=>{
     setInfo(data)  
    }).catch((error)=>{ 
      console.error(error);
      Alert.alert("Ошибка", "Ошибка не получилось получить статью.");
    }).finally(()=>{
      setIsLoading(false)
    })
}

React.useEffect(()=> {
    fetchPosts ()
},[])
    if(isLoading){
    return(
   <Loading/>
    );
}
  

    return (
        <>

  
    <ScrollView >
        <View style={{padding:20}}>
            <DetailPostImage  source={{uri:info.imageUrl} }/>
           < DetailPostTitle >
           {info.text}
           </DetailPostTitle>
        </View>
        </ScrollView>
       

        </>
    );
}
