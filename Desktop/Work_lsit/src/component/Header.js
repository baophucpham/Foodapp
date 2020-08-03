import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'white' }}>My Work</Text>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: 'white' }}>+</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
        flex: 1,
        backgroundColor: '#C19241',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal:20 
    },
});