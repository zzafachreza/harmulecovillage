import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { color, asin } from 'react-native-reanimated';
import { getData, storeData } from '../../utils/localStorage';
import { PermissionsAndroid } from 'react-native';
import LottieView from 'lottie-react-native';
import axios from 'axios';

export default function Splash({ navigation }) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const scaleLogo = new Animated.Value(0.1);
  const scaleText = new Animated.Value(100);

  Animated.timing(scaleLogo, {
    toValue: 1,
    duration: 1000,
  }).start();

  Animated.timing(scaleText, {
    toValue: 0,
    duration: 1000,
  }).start();


  useEffect(() => {

    const unsubscribe = getData('user').then(res => {
      // console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 1500);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('MainApp');
        }, 1500);
      }
    });
  }, []);

  return (
    <SafeAreaView style={{
      flex: 1,
      padding: 10,
    }}>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Image source={require('../../assets/logo.png')} style={{
          width: windowHeight / 2,
          height: windowHeight / 2,
          resizeMode: 'contain'
        }} />
        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 15,
          color: colors.black,
          textAlign: 'center'
        }}>
          <Text style={{
            fontFamily: fonts.secondary[800],
            fontSize: 20,
            color: colors.primary,

          }}>Harmul Eco-Village</Text> Merupakan Layanan Edukasi, Inovasi dan Jasa Pengelolaan Sampah Berbasis Masyarakat dalam mendukung ketahanan pangan untuk mewujudkan Pengelolaan Kampung Kota Berkelanjutan
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: 50,

        }}>

        <ActivityIndicator size="large" color={colors.secondary} />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    width: 250,
    height: 250,
  },
});
