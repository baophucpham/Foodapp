import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

class From extends Component {
    constructor(props) {
        super(props);
        this.state = {
            en: '',
            vn: '',
        }
        this.onAdd = this.onAdd.bind(this);
    }

    onAdd(){
        const{en,vn} = this.state;
        this.props.dispatch({
            type:'ADD_WORD',
            en,
            vn
        });
        this.props.dispatch({
            type:'TOGGLE_IS_ADDING',
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.TextInput}
                    value={this.state.en}
                    onChangeText={text => this.setState({en:text})}
                    placeholder="work to do"
                />
                <TextInput
                    style={styles.TextInput}
                    value={this.state.vn}
                    onChangeText={text => this.setState({vn:text})}
                    placeholder="Meaning"
                />
                <TouchableOpacity onPress={this.onAdd}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default connect()(From);

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    TextInput: {
        height: 50,
        width: 300,
        backgroundColor: '#FFFFFF',
        margin: 10,
        paddingHorizontal: 10,
    }
})