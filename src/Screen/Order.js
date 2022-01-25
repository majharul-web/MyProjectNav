/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Order = ({navigation}) => {
    const[order,setOrder]=useState('');

    const setData=async()=>{
        if(order.length==0){
            Alert.alert('warninng','Please Order');
        }
        else{
            try {
                await AsyncStorage.setItem('OrderName', order);
                navigation.navigate('Cart')
              } catch (error) {
                  console.log(error);
                // saving error
              }
        }
    }
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: '#000', fontSize: 25 }}>My Order</Text>
            <TextInput
            style={styles.input}
            placeholder='Add Order'
            onChangeText={(value)=>setOrder(value)}
            ></TextInput>
            <Pressable
            style={{backgroundColor:'red',padding:10,}}
            onPress={setData}
            >
                <Text>Add</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
  input:{
borderWidth:1,
borderRadius:10,
marginTop:10,
marginBottom:10,
width:350,
  }
});

export default Order;

