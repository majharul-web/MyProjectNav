/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

const Food = ({ item }) => {
    const { strCategory, strCategoryThumb, strCategoryDescription } = item;
    return (
        <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.5,
            padding: 7,
        }}>
            <Image
                resizeMode='contain'
                style={{ width: 100, height: 100 }}
                source={{ uri: strCategoryThumb }}
            />
            <Text style={{ color: 'goldenrod', fontSize: 16 }}>{strCategory}</Text>

            <Text style={{ color: 'black', fontSize: 14, textAlign: 'center' }}>{strCategoryDescription.slice(0, 50)}</Text>
            <Pressable
                style={{ backgroundColor: '#e91e63', height: 30, width: 70, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginVertical: 5 }}
            >
                <Text style={{ color: '#ffffff', fontSize: 14 }}>Buy Now</Text>
            </Pressable>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        width: '46%',
        // marginVertical: 7.9,
        // marginHorizontal: 7.9,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 7,
        paddingHorizontal: 10,
        margin: '2%',
        // borderWidth: 1,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
})


export default Food;


// <FlatList
// style={{ flex: 1, flexDirection: 'row', }}
// keyExtractor={item => item.idCategory}
// data={meals}
// numColumns={2}
// renderItem={({ item }) => (

//     <View style={styles.card}>
//         <Image
//             resizeMode='contain'
//             style={{ width: 100, height: 100 }}
//             source={{ uri: item.strCategoryThumb }}
//         />
//         <Text style={{ color: 'goldenrod', fontSize: 16, padding: 10 }}>{item.strCategory}</Text>

//         <Text style={{ color: 'black', fontSize: 14, padding: 10, textAlign: 'center' }}>{item.strCategoryDescription.slice(0, 20)}</Text>
//         <Pressable
//             style={{ backgroundColor: '#7787F7', height: 35, width: 90, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginBottom: 5 }}
//         >
//             <Text style={{ color: '#ffffff', fontSize: 15 }}>Buy Now</Text>
//         </Pressable>
//     </View>
// )}