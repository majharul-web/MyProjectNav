/* eslint-disable prettier/prettier */
import React from 'react';
import { Pressable, Text, View } from 'react-native';

const Profile = ({ navigation }) => {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30 }}>My Profile</Text>
        </View>
    );
};

export default Profile;