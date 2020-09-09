import React, {useEffect, useCallback, useState} from 'react';
import { 
  SafeAreaView, StyleSheet, Image, FlatList, ActivityIndicator, ImageBackground, 
  TouchableOpacity, View, Text 
  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppStyles, {styles} from './AppStyles';


const ChooseBoardScreen = props => {

  const gradeValues = [
    {
      id: 0,
      title: 'ICSE',
      image: require("./assets/ChooseBoardScreen/Path1.png")
    },
    {
      id: 1,
      title: 'CBSE',
      image: require("./assets/ChooseBoardScreen/Path2.png")
    },
    {
      id: 2,
      title: 'IGSCE',
      image: require("./assets/ChooseBoardScreen/Path3.png")
    },
    {
      id: 3,
      title: 'A / AS',
      image: require("./assets/ChooseBoardScreen/Path4.png")
    },
    {
      id: 4,
      title: 'SSC',
      image: require("./assets/ChooseBoardScreen/Path1.png")
    },
    {
      id: 5,
      title: 'IBDP',
      image: require("./assets/ChooseBoardScreen/Path2.png")
    },
    {
      id: 6,
      title: 'PYP',
      image: require("./assets/ChooseBoardScreen/Path3.png")
    },
    {
      id: 7,
      title: 'MYP',
      image: require("./assets/ChooseBoardScreen/Path4.png")
    },
    {
      id: 8,
      title: 'GCSE',
      image: require("./assets/ChooseBoardScreen/Path1.png")
    },
    {
      id: 9,
      title: 'IB',
      image: require("./assets/ChooseBoardScreen/Path2.png")
    },
    {
      id: 10,
      title: 'NIOS',
      image: require("./assets/ChooseBoardScreen/Path3.png")
    },
    {
      id: 11,
      title: 'CODING\n&TECH',
      image: require("./assets/ChooseBoardScreen/Path4.png")
    }
  ];

  const [arrGrade, setUpGrade] = useState(gradeValues);
  const [selectedIndex, setSelectedIndex] = useState('');

  const renderGridItem = (gridItem, index) => {
      console.log(index);
      let textDetail = ''
      if (index !== arrGrade.length-1) {
          textDetail = "(grade 1 - 12)"
      }
      return(
          <View style={styles.listItem}>
              <TouchableOpacity onPress={() => {
                  setSelectedIndex(index);
                  let dummy = arrGrade;
                  dummy.forEach((elem) => {
                      elem.toggle = false
                      if (elem.id === index) {
                          elem.toggle = true
                      }
                  })
                  setUpGrade(dummy);
              }}>
              <View style={styles.innerContainer}>
                  { <Image style={[styles.backBtnImage, (gridItem.toggle ? {tintColor: '#012060'} : {})]} source={gridItem.image}/> }
                  <Text style={[styles.text, {color: gridItem.toggle ? 'white' : '#32619B'}]}>{gridItem.title}</Text>
                  <Text style={[styles.textDetail,{color: gridItem.toggle ? 'white' : '#A2ACBD'} ]}>{textDetail}</Text>
              </View>
              </TouchableOpacity>
          </View>
      );
  };

  renderFooter = () => {
    return(
      <View style={styles.bottomView}>
        <TouchableOpacity style={styles.nextButton} onPress={() => {
          console.log('Next Button Pressed');
        }}>
            <Image source={require('./assets/ChooseBoardScreen/btnNext.png')}/>
        </TouchableOpacity>
        <ImageBackground source={require('./assets/ChooseBoardScreen/bgFooter.png')} style={styles.bottomContainer}>
        <Image source={require('./assets/ChooseBoardScreen/YellowArrow.png')} style={styles.arrowBtn}/>
        <TouchableOpacity onPress={() => {
          console.log('Next Button Pressed');
        }}>
            <Image source={require('./assets/ChooseBoardScreen/btnHomeSchool.png')} style={styles.buttonHomeSchool}/>
        </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  };
  
  return (
        <SafeAreaView style={styles.container}>
        <Text style={styles.headerText}>Choose your board!</Text>
        <Text style={styles.headerDetailText}>Please, select at least one</Text>
                <FlatList
                style={{
          top:20,
                    width: '100%',
                    marginBottom: 0
                }}
                keyExtractor={ (item, index) => index.toString() }
                data={arrGrade} numColumns={2}  
                renderItem={({item, index}) => renderGridItem(item, index)}
                ListFooterComponent={this.renderFooter}
                />
        </SafeAreaView>
  );

}
export default ChooseBoardScreen;