import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import Swiper from 'react-native-swiper';
import img_bg_shutter from '../asset/images/img_bg_shutter_1x.png'
const SplashScreen =({navigation})=>{
    return (
      <Swiper style={styles.wrapper} showsButtons={false}>
        <ScrollView contentContainerStyle={styles.slide1}>
          <Image source={img_bg_shutter} style={styles.img_bg_shutter}/>
          <Text style={styles.title}>Scannez, Payez and Profitez!</Text>
          <Text style={styles.subTitle} numberOfLines={3}>Scannez les produits que vous souhaitez acheter dans votre magasin préféré.</Text>
          <Text style={styles.paragraph} numberOfLines={2}>Payez par téléphone.
Un shopping agréable et convivial!</Text>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.slide2}>
          <Image source={img_bg_shutter} style={styles.img_bg_shutter}/>
          <Text style={styles.title}>Scannez, Payez and Profitez!</Text>
          <Text style={styles.subTitle} numberOfLines={3}>Scannez les produits que vous souhaitez acheter dans votre magasin préféré.</Text>
          <Text style={styles.paragraph} numberOfLines={2}>Payez par téléphone.
Un shopping agréable et convivial!</Text>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.slide1}>
          <Image source={img_bg_shutter} style={styles.img_bg_shutter}/>
          <Text style={styles.title}>Scannez, Payez and Profitez!</Text>
          <Text style={styles.subTitle} numberOfLines={3}>Scannez les produits que vous souhaitez acheter dans votre magasin préféré.</Text>
          <Text style={styles.paragraph} numberOfLines={2}>Payez par téléphone.
Un shopping agréable et convivial!</Text>
        <TouchableOpacity style={styles.btnNext} onPress={()=>navigation.navigate('TabNavigator')}>
          <Text style={styles.textBtn}>Shopping now!</Text>
        </TouchableOpacity>
        </ScrollView>
      </Swiper>
    );
  }
export default SplashScreen;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
    padding: 66
  },
  img_bg_shutter:{
    width: 267,
    height: 267,
    resizeMode: 'contain',
    borderRadius: 200,
  },
  title:{
    fontFamily: 'Roboto',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: '700',
    color: '#363636',
    textAlign: 'center',
    marginTop: 52,
    letterSpacing: 0.3
  },  
  subTitle:{
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: '#000000',
    textAlign: 'center',
    marginTop: 28,
    letterSpacing: 0.3,
    padding: 10
  },  
  paragraph:{
    fontFamily: 'Roboto',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '100',
    color: '#000000',
    textAlign: 'center',
    marginTop: 28,
    letterSpacing: 0.3,
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
    padding: 66
  },
  btnNext:{
    height: 63,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F08F5F',
    borderRadius: 100,
    marginTop: 28
  },
  textBtn:{
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 1,
  }
})