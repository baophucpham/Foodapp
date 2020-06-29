import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, TouchableOpacity, Alert } from "react-native";
import * as imageURl from '../../Assets/images/imageURL';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import DentailComponent from "../molecules/Detail";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Data: [
                {
                    type: 'Dessert',
                    color: '#f7931e',
                    data: [
                        {
                            name: 'Stewed Mushrooms',
                            image: ("imageURl/namkho"),
                            price: "$12"
                        },
                        {
                            name: 'Jackfruit Fried',
                            image: ("imageURl/mitkho"),
                            price: "$15"
                        }
                    ]
                },
                {
                    type: 'Main course',
                    color: '#39b54a',
                    data: [
                        {
                            name: 'Noodles',
                            image: ("mageURl/hutieu"),
                            rating: 4,
                            price: "$20"
                        },
                        {
                            name: 'Beef',
                            image: ("mageURl/cuonlalot"),
                            rating: 2,
                            price: "$12"
                        },
                        {
                            name: 'Salad dressing',
                            image: ("mageURl/cuondiep"),
                            rating: 5,
                            price: "$13"
                        },
                    ]
                },
                {
                    type: 'Other',
                    color: '#ed1e79',
                    data: [
                        {
                            name: 'Salad dressing',
                            image: ("mageURl/cuondiep"),
                            price: "$13"
                        },
                        {
                            name: 'Jackfruit warehouse',
                            image: ("imageURl/mitkho"),
                            price: "$15"
                        }
                    ]
                },
            ]
        }
    }
    render() {
        const Detail = ({})
        return (
            <View style={styles.container}>

                <View style={styles.flatList}>
                    <FlatList
                        data={this.state.data}
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
                                    onPress={()=>{this.props.navigation.navigate('Detail')}}
                                    style={styles.Buttom}>
                                    <Text style={styles.text}>{item.type}</Text>
                                </TouchableOpacity>
                            </View>
                        } />
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
        backgroundColor: '#2EA342',
        borderBottomWidth: 1,
        padding: 30,
        marginVertical: 8,
        marginHorizontal: 0,
        borderRadius: 15,
    },
    text: {
        textAlign: "center"
    },
});