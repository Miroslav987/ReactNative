
import axios from 'axios';
import React, { lazy } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Alert, Text, View,FlatList, ActivityIndicator, RefreshControl,TouchableOpacity, ScrollView} from 'react-native';
import styled  from "styled-components/native"
import Post from './Post';
import { Loading } from './Loading';

const AppText =styled.Text `
font-size:50px;
color:black;
margin:300px auto;`

export  function Home({navigation}) {
 

    const [items ,setItems]=React.useState();
    const Nullobj =[];
    const [isLoading ,setIsLoading]=React.useState(true);
    
    const fetchPosts =()=>{
      setIsLoading(true)
      axios.get("https://64feee41f8b9eeca9e294dfe.mockapi.io/test1")
      .then(({data})=>{
        setItems(data)
    
      }).catch((error)=>{
        console.error(error);
        Alert.alert("Ошибка", "Ошибка с сервером");
      }).finally(()=>{
        setIsLoading(false)
      })
    }
    

    
      React.useEffect(()=>{
        fetchPosts()
      },[])
    ;
    
    
    let test = JSON.stringify(items) !== JSON.stringify(Nullobj);
    
    if(isLoading){
      return(
        <Loading/>
    );
    
      
    }
      return (
        <View  > 
         { test === true ? 
           <FlatList 
           refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>}
           data={items}
            renderItem={({item})=> 
    <TouchableOpacity
     onPress={()=> navigation.navigate("DetailsPost",{id:item.id, title:item.title,})}>
    <Post  
      id={item.id}
      title={item.title}
      date={item.date}
      image={item.imageUrl}
      />
    </TouchableOpacity>
    }/>
    
      :<View>
        <ScrollView refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}/>} >
      <AppText>Пусто</AppText>
      </ScrollView>
      </View>
     }
      </View>
      );
    
      }