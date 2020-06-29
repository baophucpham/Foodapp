import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Dimensions, Image, StatusBar, TextInput, Button, Alert } from 'react-native';
import * as imageURl from '../../Assets/images/imageURL';
import IoniCon from "react-native-vector-icons/Ionicons";
import { color } from 'react-native-reanimated';

export default class DentailComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <ImageBackground
          source={imageURl.header_detail}
          style={{ flex: 1, alignItems: 'center' }}
          resizeMode={"stretch"}>

          <View style={styles.image_Container}>
            <Image
              source={imageURl.hutieu}
              style={styles.images} />
          </View>

        </ImageBackground>
        <View style={styles.footer}>
          <View style={styles.status}>
            <Text style={{ color: 'green' }}>AVALIABLE</Text>
          </View>
          <TextInput style={styles.input}
            placeholder='price'
          />
          <TextInput style={styles.name}
            placeholder='name chef'
          />
          <TextInput style={styles.formula}
            placeholder='formula'
          />
          <View style={styles.fixToText}>
            <Button
              color='#5DB542'
              title="ADD"
              onPress={() => Alert.alert('do you want add new')}
            />
            <Button
              color='#5DB542'
              title="EDIT"
              onPress={() => Alert.alert('do you want edit')}
            />
            <Button
              color='#5DB542'
              title="DELET"
              onPress={() => Alert.alert('do you want delete')}
            />
          </View>
        </View>
      </View>
    )
  }
}

const height = Dimensions.get("screen").height;
const height_image = height * 0.45 * 0.45

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  footer: {
    flex: 1,
    paddingHorizontal: 40,
  },
  image_Container: {
    width: height_image,
    height: height_image,
    marginTop: height_image / 3,
  },
  images: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: height_image / 2,
  },
  status: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: 'green'
  },
  input: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    marginHorizontal: 130,
    marginVertical: 8,
    borderColor: 'green'
  },
  name: {
    width: 270,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 50,
    paddingVertical: 3,
    borderColor: 'green',
    marginHorizontal: 20,
  },
  formula: {
    height: 100,
    width: 270,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 3,
    borderColor: 'green',
    marginHorizontal: 20,
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 3,
    borderRadius: 20,
  },

})