/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Food from '../Pages/Food';


const Home = () => {

    const [meals, setMeals] = useState([]);
    // console.log(meals);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMeals(setMeals(data.categories)))
            .catch((error) => {
                console.log("Api call error");
                alert(error.message);
            });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            {/* Curve */}
            <ImageBackground
                imageStyle=
                {{ opacity: 0.5 }}
                source={require('../../images/banner.jpg')}
                resizeMode='cover'
                style={{ flex: 1 }}
            >

                {/* <Pressable style={{ marginLeft: 10, marginTop: 5, fontWeight: '700' }}>
                    <MaterialCommunityIcons name="reorder-horizontal" color={'red'} size={30} />
                </Pressable> */}
                <Text style={{ color: '#e91e63', fontSize: 35, textAlign: 'center' }}>MS Restaurants</Text>
            </ImageBackground >



            <View style={{ flex: 3 }}>
                <Text style={{ textAlign: 'center', color: '#e91e63', fontSize: 20, paddingVertical: 10 }}>Our Foods</Text>
                <View style={{ flex: 1 }}>
                    <FlatGrid
                        keyExtractor={item => item.idCategory}
                        data={meals}
                        style={{ flex: 1 }}
                        spacing={20}
                        renderItem={({ item }) => (
                            <Food item={item}></Food>
                        )}
                    />
                </View>
            </View>

        </View >
    );
};

const styles = StyleSheet.create({
    curve: {
        flex: 1,
    },

});

const drawerStyles = {
    drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 },
    main: { paddingLeft: 3 },
}

export default Home;