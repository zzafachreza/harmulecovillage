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
export default function In3() {


    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={require('../../assets/in3.png')} style={{
                    width: '100%',
                    margin: 0,
                    alignSelf: 'center',
                    height: 1000,
                    resizeMode: 'contain'
                }} />


                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    margin: 10,
                    textAlign: 'justify'
                }}>
                    Selokan pada umumnya kotor penuh dengan limbah dan bau menyengat. Di sulap menjadi budidaya ikan air tawar. Yang sudah berjalan di RW.02 dan Rw.06 sehingga lebih asri dan sehat.
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