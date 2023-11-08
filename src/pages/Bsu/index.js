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
    StyleSheet,
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


export default function Bsu({ navigation }) {
    const isFocused = useIsFocused();
    useEffect(() => {



        if (isFocused) {
            __GetTransaction();
        }
    }, [isFocused]);


    const [BSU, setBSU] = useState([]);

    const __GetTransaction = () => {
        axios.post(urlAPI + '/1data_bsu.php').then(res => {
            console.log('bsu', res.data);

            setBSU(res.data)
        })

    }
    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 5,
        }}>


            {BSU.length > 0 && BSU.map(item => {
                return (
                    <TouchableWithoutFeedback onPress={() => {

                        navigation.navigate('Barang', item);
                        storeData('bsu', item);

                    }}>
                        <View style={{
                            // flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 10,
                            height: 70,
                            backgroundColor: colors.tertiary,
                            borderRadius: 10,
                            marginVertical: 3,
                        }}>
                            <Text style={{
                                fontFamily: fonts.secondary[600],
                                color: colors.primary,
                                fontSize: 15,
                            }}>{item.nama_bsu}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                )
            })}


        </View>
    )
}

const styles = StyleSheet.create({})