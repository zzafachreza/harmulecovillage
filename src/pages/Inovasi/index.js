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
import { ScrollView } from 'react-native';


export default function Inovasi({ navigation }) {


    const BSU = [

        {
            image: require('../../assets/I1.png'),
            target: 'Bsu'
        },
        {
            image: require('../../assets/I2.png'),
            target: 'In1'
        },
        {
            image: require('../../assets/I3.png'),
            target: 'In2'
        },
        {
            image: require('../../assets/I4.png'),
            target: 'In3'
        },
        {
            image: require('../../assets/I5.png'),
            target: 'In4'
        },
    ]


    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 5,
        }}>


            <ScrollView>
                {BSU.length > 0 && BSU.map(item => {
                    return (
                        <TouchableWithoutFeedback onPress={() => {
                            navigation.navigate(item.target);

                        }}>
                            <View style={{
                                flex: 1,
                                justifyContent: 'center',
                                // alignItems: 'center',
                                padding: 15,
                                backgroundColor: colors.white,
                                borderWidth: 1,
                                borderColor: colors.primary,
                                borderRadius: 10,
                                marginVertical: 3,
                            }}>
                                <Image source={item.image} style={{
                                    width: '70%',
                                    height: 90,
                                    resizeMode: 'contain'
                                }} />
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({})