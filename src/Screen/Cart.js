/* eslint-disable prettier/prettier */
import React,{useState}from 'react';
import { Text, View,Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Cart = () => {
    const[order,setOrder]=useState('');

    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('OrderName')
          setOrder(value)
        } catch(e) {
          // error reading value
        }
      }
    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 25 }}>My Cart</Text>
            <Text style={{ color: '#000', fontSize: 25 }}>Your orderd :{order}</Text>
           
            <Pressable
            style={{backgroundColor:'red',padding:10,}}
            onPress={getData}
            >
                <Text>Add</Text>
            </Pressable>
        </View>

    );
};

export default Cart;