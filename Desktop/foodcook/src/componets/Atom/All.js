import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity } from "react-native";
import * as imageURl from '../../Assets/images/imageURL';


export default class All extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [{
                key: '1',
                name: 'Stewed Mushrooms',
                image: ("imageURl/namkho"),
                rating: 3,
                price: "$12"
            },
            {
                key: '2',
                name: 'Jackfruit Fried',
                image: ("imageURl/mitkho"),
                rating: 5,
                price: "$15"
            },
            {
                key: '3',
                name: 'Noodles',
                image: ("mageURl/hutieu"),
                rating: 4,
                price: "$20"
            },
            {
                key: '4',
                name: 'Beef',
                image: ("mageURl/cuonlalot"),
                rating: 2,
                price: "$12"
            },
            {
                key: '5',
                name: 'Salad dressing',
                image: ("mageURl/cuondiep"),
                rating: 5,
                price: "$13"
            },]
        }
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent} />
                </View>
                <SafeAreaView style={styles.containerList}>
                
                    <FlatList
                        data={this.state.Data}
                        renderItem={({ item }) =>
                            <View style={styles.dong}>
                                <TouchableOpacity 
                                onPress = {() => {this.props.navigation.navigate('Detail')}}
                                style={styles.Buttom} >
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.price}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                </SafeAreaView>  
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerList: {
        flex: 1,
    },
    dong: {
        borderBottomWidth: 1,
        padding: 30,
        backgroundColor: '#86C440',
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 15,
    },
    text:{
        textAlign:"center"
    },
    Buttom: {
    },
});