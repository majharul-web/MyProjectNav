/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { Dimensions, FlatList, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const Foods = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setMeals(data.categories));
    }, []);
    return (
        <FlatList
            keyExtractor={item => item.idCategory}
            data={meals}
            style={styles.gridView}
            spacing={20}
            renderItem={({ item }) => (
                // <Food item={item}></Food>
                <View View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    // borderWidth: 1,
                    padding: 7,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 3,
                    },
                    shadowOpacity: 0.27,
                    shadowRadius: 10,
                    elevation: 6,

                }}>
                    <Image
                        resizeMode='contain'
                        style={{ width: 100, height: 100 }}
                        source={{ uri: item.strCategoryThumb }}
                    />
                    <Text style={{ color: 'goldenrod', fontSize: 16 }}>{item.strCategory}</Text>

                    <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>{item.strCategoryDescription.slice(0, 50)}</Text>
                    <Pressable
                        style={{ backgroundColor: '#e91e63', height: 30, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 5 }}
                    >
                        <Text style={{ color: '#ffffff', fontSize: 14 }}>Buy Now</Text>
                    </Pressable>

                </View>
            )}
        />


    );
};

const styles = StyleSheet.create({
    curve: {
        flex: 1,
    },
    gridView: {
        flex: 1,
    },
});

export default Foods;