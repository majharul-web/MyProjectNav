/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';


const Profile = ({ navigation, route }) => {
    // console.log(route.params);
    const { userName, userImg } = route.params;
    console.log(userImg);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Image
                style={{ height: 100, width: 100 }}

                // source={require('../../images/banner.jpg')}

                // source={{
                //     uri: 'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?size=626&ext=jpg',
                // }}

            source={{
                uri: userImg,
            }}
            />
            <Text style={[GlobalStyle.CustomFont,{ color: 'black', fontSize: 20, }]}>{userName}</Text>
        </View>
    );
};

export default Profile;