import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Flintstones and Rubbles</Text>
            <ScrollView horizontal={false}>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Fred </Text>
                    <Image source={ require('./assets/fred.jpg') } style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Wilma </Text>
                    <Image source={ require('./assets/wilma.png') } style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Pebbles </Text>
                    <Image source={ require('./assets/pebbles.png') } style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Barney </Text>
                    <Image source={ require('./assets/barney.jpg') } style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Bettie </Text>
                    <Image source={ require('./assets/bettie.png') } style={styles.img} />
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.nameText}>Bamm-Bamm </Text>
                    <Image source={ require('./assets/bamm.jpg') } style={styles.img} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            marginTop: 50,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
        itemContainer: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 5,
            marginVertical: 5,
        },
        heading: {
            fontSize: 30, 
            fontWeight: "bold", 
            color: 'green'
        },
        nameText: {
            fontSize: 20, 
            color: 'blue', 
            marginTop: 10
        },
        img: { 
            width: 250, 
            height: 250 
        }
    }
);

export default App;