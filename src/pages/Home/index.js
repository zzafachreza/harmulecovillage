import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import MyCarouser from '../../components/MyCarouser';
import axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';
import 'intl';
import 'intl/locale-data/jsonp/en';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native';


const MyMenuHome = ({ onPress, img, label, width }) => {

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View>
        <View style={{
          margin: 5,
          width: width / 5,
          height: width / 5,
          borderRadius: width / 2,
          padding: 5,
          backgroundColor: colors.primary,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image source={img} style={{
            width: width / 12,
            height: width / 12,
            resizeMode: 'contain'
          }} />
        </View>
        <Text style={{
          marginTop: 2,
          fontFamily: fonts.secondary[400],
          fontSize: width / 30,
          textAlign: 'center',
          color: colors.primary,
        }}>{label}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default function Home({ navigation }) {




  const [user, setUser] = useState([]);
  const [cart, setCart] = useState(0);
  const [token, setToken] = useState('');

  const isFocused = useIsFocused();

  useEffect(() => {

    const unsubscribe = messaging().onMessage(async remoteMessage => {

      const json = JSON.stringify(remoteMessage);
      const obj = JSON.parse(json);



      PushNotification.localNotification({
        /* Android Only Properties */
        channelId: 'harmulecovillage', // (required) channelId, if the channel doesn't exist, notification will not trigger.
        title: obj.notification.title, // (optional)
        message: obj.notification.body, // (required)
      });
    });

    if (isFocused) {
      __getDataUserInfo();
    }
    return unsubscribe;
  }, [isFocused]);


  const [BSU, setBSU] = useState([]);
  const __getDataUserInfo = () => {


    axios.post(urlAPI + '/1data_bsu.php').then(res => {
      console.log('bsu', res.data);

      setBSU(res.data)
    })


    getData('user').then(users => {
      console.log(users);
      setUser(users);
      axios.post(urlAPI + '/1_cart.php', {
        fid_user: users.id
      }).then(res => {
        console.log('cart', res.data);

        setCart(parseFloat(res.data))
      })
      getData('token').then(res => {
        console.log('data token,', res);
        setToken(res.token);
        axios
          .post(urlAPI + '/update_token.php', {
            id: users.id,
            token: res.token,
          })
          .then(res => {
            console.error('update token', res.data);
          });
      });
    });
  }

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  const ratio = 192 / 108;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>

      <View
        style={{
          padding: 10,
          backgroundColor: colors.primary,
          flexDirection: 'row',
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          marginBottom: 20,
        }}>

        <View style={{ flex: 1, paddingTop: 0, flexDirection: 'row' }}>
          <View style={{ paddingLeft: 10, flex: 3 }}>

            <Text
              style={{
                fontSize: windowWidth / 30,
                color: colors.white,
                fontFamily: fonts.secondary[600],
              }}>
              Selamat datang,
            </Text>
            <Text
              style={{
                fontSize: windowWidth / 30,
                color: colors.white,
                fontFamily: fonts.secondary[600],
              }}>
              {user.nama_lengkap}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Cart')}
            style={{
              position: 'relative',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center'


            }}>
            <Icon type='ionicon' name="cart" color={colors.white} />
            <Text style={{
              position: 'absolute', top: 2, right: 5, backgroundColor: colors.secondary, width: 15,
              textAlign: 'center',
              height: 15, borderRadius: 2, color: colors.black
            }} >{cart}</Text>

          </TouchableOpacity>

        </View>

      </View>




      <MyCarouser />
      <View style={{
        flex: 1,
        justifyContent: 'space-evenly',

        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>



        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',

        }}>
          <MyMenuHome width={windowWidth} img={require('../../assets/A1.png')} onPress={() => navigation.navigate('TentangKami')} label="Tentang Kami" />
          <MyMenuHome width={windowWidth} img={require('../../assets/A2.png')} onPress={() => navigation.navigate('Inovasi')} label="Inovasi" />
          <MyMenuHome width={windowWidth} img={require('../../assets/A3.png')} onPress={() => navigation.navigate('TentangKami')} label="Galeri" />
        </View>

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around'
        }}>

          <MyMenuHome width={windowWidth} img={require('../../assets/A4.png')} onPress={() => navigation.navigate('Inovasi')} label="Kabar Terbaru" />
          <MyMenuHome width={windowWidth} img={require('../../assets/A5.png')} onPress={() => navigation.navigate('TentangKami')} label="User Kursus" />
          <MyMenuHome width={windowWidth} img={require('../../assets/A6.png')} onPress={() => navigation.navigate('Inovasi')} label="Testimoni" />
        </View>



      </View>


    </SafeAreaView>
  );
}
