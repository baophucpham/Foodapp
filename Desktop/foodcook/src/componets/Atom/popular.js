import React from 'react';
import {View, Text, StyleSheet,FlatList,SafeAreaView,TouchableOpacity} from "react-native";
import * as imageURl from '../../Assets/images/imageURL';

export default class Popular extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Data:[{
                name: 'Alex Sander',
                rating: 5,
                comment: 'Good',
                image:("imageURl/avatar1,")
            },
            {
                name: 'Trong Thanh',
                rating: 4,
                comment: 'Ok',
                image: ("imageURl/avatar2")
            },
            {
                name: 'Huynh Nhu',
                rating: 2,
                comment: 'Bad',
                image:("imageURl/avatar3")
            },
            {
                name: 'Trong That',
                rating: 5,
                comment: 'good food good mood',
                image:("imageURl/avatar4")
            },
            {
                name: 'Ngoc Trai',
                rating: 4,
                comment: 'Very good',
                image:("imageURl/avatar2")
            },
            {
                name: 'Hai Bang',
                rating: 2,
                comment: 'normal',
                image:("imageURl/avatar4")
            }]
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.flatList}>
                    <FlatList data={this.state.data}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index)=>index.toString()}
                        ItemSeparatorComponent={this.ItemSeparatorComponent}/>
                </View>
                <SafeAreaView style={styles.containerList}>
                    <FlatList
                        data={this.state.Data}
                        renderItem={({ item }) =>
                            <View style={styles.dong}>
                                <TouchableOpacity
                                onPress={()=>{this.props.navigation.navigate('Detail')}} 
                                style={styles.Buttom}>
                                <Text style={styles.text}>{item.name}</Text>
                                <Text style={styles.text}>{item.rating}</Text>
                                <Text style={styles.text}>{item.comment}</Text>
                                </TouchableOpacity>
                            </View>
                        }
                        horizontal={false}
                        numColumns={2}
                    />
                </SafeAreaView>
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    containerList:{
        flex:1,
    },
    dong: {
        backgroundColor:'#2EA342',
        width:145,
        height:145,
        borderBottomWidth: 1,
        padding: 30,
        marginVertical: 9,
        marginHorizontal: 4,
        borderRadius:100,
    },
    text:{
        textAlign:"center"
    },
});