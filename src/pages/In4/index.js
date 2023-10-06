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
import { fonts, windowHeight } from '../../utils/fonts';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import { Icon } from 'react-native-elements';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import LottieView from 'lottie-react-native';
import { useIsFocused } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Judul = ({ label }) => {
    return (
        <View style={{
            marginTop: 20,
            zIndex: 99,
            padding: 10,
            backgroundColor: colors.tertiary,
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: 10,
        }}>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 16,
                color: colors.primary,
                textAlign: 'center'
            }}>{label}</Text>
        </View>
    )
}

const NomorList = ({ no, label }) => {
    return (
        <View style={{
            marginVertical: 2,
            flexDirection: 'row'
        }}>
            <Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: 14,
                color: colors.black,

            }}>{no}. </Text>
            <Text style={{
                left: 5,
                flex: 1,
                fontFamily: fonts.secondary[400],
                fontSize: 14,
                color: colors.black,

            }}>{label}</Text>
        </View>
    )
}
export default function In4() {


    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                    marginBottom: 20,
                    color: colors.primary,
                    textAlign: 'center'
                }}>
                    AURA (ARGO URBAN FARMING)
                </Text>
                <Image source={require('../../assets/in4.png')} style={{
                    width: '100%',
                    margin: 0,
                    alignSelf: 'center',
                    height: windowHeight - 220,
                    resizeMode: 'contain'
                }} />


                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    margin: 10,
                    textAlign: 'justify'
                }}>
                    Merupakan kegiatan bercocok tanam yang mudah, dengan media tanam menggunakan barang-barang tidak terpakai seperti; kaleng cat bekas, paralon, hingga botol air mineral bekas, sehingga hasil panennya bisa dimanfaatkan warga.
                </Text>


            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        marginTop: -5,
        marginHorizontal: 5,
        borderWidth: 1,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderColor: colors.border,
    },
    title: {
        fontFamily: fonts.secondary[600],
        fontSize: 14,
        color: colors.black
    },
    desc: {
        fontFamily: fonts.secondary[400],
        fontSize: 14,
        color: colors.black
    }
})