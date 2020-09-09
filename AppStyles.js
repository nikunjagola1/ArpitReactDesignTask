import { StyleSheet, Dimensions } from 'react-native';
import * as React from 'react';

const WIDTH = Dimensions.get('window').width,
      HEIGHT = Dimensions.get('window').height

export const styles = StyleSheet.create({

  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },

  headerText: {
    color: '#FFC000',
    fontSize: 28,
    fontWeight: 'bold'
  },

  headerDetailText: {
    color: '#A2ACBD',
    fontSize: 18,
  },

  listItem: {
    flex: 0.6,
    alignItems: 'center',
    aspectRatio: 1,
  },

  innerContainer: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center', 
  },

  horizontal: {
    flexDirection: "row",
  },

  textStyle1: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },

  separatorHor: {
    marginVertical: 8,
    backgroundColor: '#ffffff',
    width: 10,
  },

  textFieldUser: {
    height: 40, 
    width: 160, 
    marginBottom: 10, 
    borderColor: 'gray', 
    borderWidth: 1
  },

  textFieldInvalidInput: {
    borderColor: '#990000', 
    borderWidth: 1
  },

  separator: {
    marginVertical: 8,
    backgroundColor: 'lightgray',
    height: 2,
    width: 400,
  },

  backBtnImage: {
    flex:1,
    position: 'absolute'
  },

  bottomView: {
    height: 300,
    width: '100%',
    alignItems:'center',
    justifyContent: 'flex-start'
  },

  text:{
    color: '#32619B',
    fontSize: 18,
    fontWeight: 'bold'
  },

  textDetail: {
    color: '#A2ACBD',
    fontSize: 10,
  },

  nextBtn: {
    height: 50,
    width: 187,
    marginTop: 32,
    marginBottom: 35,
  },

  bottomContainer: {
    height: 230,
    width: '100%',
    bottom: 0,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
  },

  buttonHomeSchool: {
    marginBottom: 35
  },

  arrowBtn: {
    height: 85,
    width: 80,
    marginTop: 25,
    left: 75
  }

});

