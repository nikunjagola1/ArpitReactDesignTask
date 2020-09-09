import React, {useEffect, useCallback, useState} from 'react';
import { 
  SafeAreaView, StyleSheet, Image, FlatList, ActivityIndicator, ImageBackground, 
  TouchableOpacity, Dimensions, View, Text, Button
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import AppStyles, {styles} from './AppStyles';

const MainScreen = props => {

    return(
        <View style={styles.container}>
        <Image source={require('./assets/MainScreen/topPath.png')} style={styles.imageContainer}/>
            <View style={styles.headerContainer}>
                <Image source={require('./assets/MainScreen/arrowLeft.png')} style={{ top:10, right: 5}}/>
                <Text style={styles.headerText}>Get started here!</Text>
                <Image source={require('./assets/MainScreen/arrowRight.png')} style={{ top:10, left: 5, height: 44, width:35}}/>
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.accountType}>
                    <ImageBackground style={ styles.image }
                        source={require('./assets/MainScreen/pathLearn.png')}>
                        <Text style={styles.text}>Learn</Text>
                        <Text style={styles.textDetail}>(for students)</Text>
                    </ImageBackground>
                </View>
                <View style={styles.accountType}>
                    <ImageBackground style={ styles.image } 
                        source={require('./assets/MainScreen/pathTeach.png')}>
                        <Text style={styles.text}>Teach</Text>
                        <Text style={styles.textDetail}>(for teachers)</Text>
                    </ImageBackground>
                </View>
            </View>
            <Button color='#333333' title='Already have an account?' style={styles.buttonConfig} onPress={() => {
                console.log('Button already have an account pressed')
            }}/>
            <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate("ChooseBoardScreen")}}>
              <Image source={require('./assets/MainScreen/login.png')}/>
            </TouchableOpacity>
            <View style={styles.bottomView}>
                <Image source={require('./assets/MainScreen/bottomPath.png')} style={styles.footerImage}/>
                <Image source={require('./assets/MainScreen/bottomDesignBlue.png')} style={styles.blueIcon}/>
            </View>
        </View>
    );
}

function GoToChooseBoardScreen({ navigation }) {
  return (
    <TouchableOpacity style={styles.touchable} onPress={() => {navigation.navigate("ChooseBoardScreen")}}>
      <Image source={require('./assets/MainScreen/login.png')}/>
    </TouchableOpacity>
  );
}


  // onSubmit(){
  //   const {firstName, lastName} = this.state;
  //    if(firstName.trim().length == 0){
  //     this.firstNameInput.setNativeProps({
  //       borderColor:'red',
  //       borderWidth:1
  //     });
  //     return;
  //   }

  //   if(lastName.trim().length == 0){
  //     this.lastNameInput.setNativeProps({
  //       borderColor:'red',
  //       borderWidth:1
  //     });
  //     return;
  //   }
  // }

  // validate = (navigate) => {
  //   console.log('Click happened');
  //   {navigate('Details', {
  //     emailId: this.state.emailId
  //   });}
  // }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: '2%',
        marginTop: '2%'
    },
    headerText:{
        color: '#012060',
        fontSize: 26,
        alignItems: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 0,
        width: '100%',
        height: '25%',
        alignSelf: 'center',
    },
    accountType: {
        flex: 0.5,
        alignItems:'center',
        justifyContent: 'center',
    },
    imageContainer:{
        height: '20%',
        width: '100%',
        resizeMode: 'stretch'
    },
    image: {
        height: '100%',
        aspectRatio: 1.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: '#32619B',
        fontSize: 20,
        fontWeight: 'bold'
    },
    textDetail: {
        color: '#A2ACBD',
        fontSize: 12,
    },
    buttonConfig: {
        backgroundColor: 'transparent'
    },
    buttonTextStyle: {
        color: '#32619B',
        fontSize: 10,
    },
    touchable: {
        height:50,
        width: 183,
    },
    blueIcon: {
        height: Dimensions.get('window').height*0.25,
        resizeMode: 'contain',
        aspectRatio: 1,
        position: 'absolute',
        right: '8%',
        bottom: '40%'
    },
    footerImage: {
        width: '100%',
        resizeMode: 'stretch',
    },
    bottomView: {
        width: '100%',
        position: 'absolute',
        height: '17%',
        bottom: 0
    },
});

export default MainScreen;