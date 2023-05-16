import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./screens/WelcomeScreen";
import UserScreen from "./screens/UserScreen";
import Ionicons from '@expo/vector-icons/Ionicons'

const BottomNavigator = createBottomTabNavigator()


export default function App() {
    return (
        <NavigationContainer>
            <BottomNavigator.Navigator
                screenOptions={{
                    headerStyle: {backgroundColor: '#303030'},
                    headerTintColor: '#CC9933',
                    drawerActiveTintColor: '#CC9933',
                    tabBarActiveTintColor: '#CC9933'
                }}>
                <BottomNavigator.Screen
                    name='WelcomeScreen'
                    component={WelcomeScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={18}/>
                    }}
                />
                <BottomNavigator.Screen
                    name='UserScreen'
                    component={UserScreen}
                    options={{
                        tabBarIcon: ({color, size}) => <Ionicons name='person' color={color} size={18}/>
                    }}
                />
            </BottomNavigator.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
