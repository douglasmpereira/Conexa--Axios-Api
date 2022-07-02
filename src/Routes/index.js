import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Game from "../Game";

const Stack = createNativeStackNavigator();

const Routes = ()=> {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                name="Home" 
                component={Home}
                 options = {{headerShown: false}}
               />
               <Stack.Screen
                name="Game"
                component={Game}
                options={{title: "Titulo da pagina"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Routes;