import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { DetailsPost } from "./DetailsPost";
import { Home } from "./Home";
import { NavigationContainer } from "@react-navigation/native";

const Stack =createNativeStackNavigator();



export const Navigation = () =>{
    return(
    <NavigationContainer>
         <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title:"Список"}}/>
        <Stack.Screen name="DetailsPost" component={DetailsPost} options={{title:"Статья"}}/>
    </Stack.Navigator>
    </NavigationContainer>)
}