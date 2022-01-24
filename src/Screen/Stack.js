
/* eslint-disable prettier/prettier */
import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('Second');
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30 }}>Home Screen</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : 'goldenrod' })}
            >
                <Text style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>Go Second Screen</Text>
            </Pressable>
        </View>

    );
};

const SecondScreen = ({ navigation }) => {
    const onPressHandler = () => {
        navigation.navigate('Home');
    };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30 }}>Second Screen</Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : 'goldenrod' })}
            >
                <Text style={{
                    margin: 10,
                    fontSize: 30,
                    fontWeight: 'bold'
                }}>Go Home Screen</Text>
            </Pressable>
        </View>
    );
};



const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    header: () => null,
                }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Second" component={SecondScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;