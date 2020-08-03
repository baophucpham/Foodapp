import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Header extends Component{
    render(){
        return(
            <View style={styles.header}>
                    <Text style={{ fontSize: 20, color: 'white' }}>My Work</Text>
                    <TouchableOpacity>
                        <Text 
                        style={{ fontSize: 20, color: 'white' }}
                        onPress={()=>this.props.dispatch({type:'TOGGLE_IS_ADDING'})}
                        >+</Text>
                    </TouchableOpacity>
                </View>
        )
    }
}

export default connect()(Header);

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