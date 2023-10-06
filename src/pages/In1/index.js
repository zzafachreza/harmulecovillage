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
export default function In1() {


    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <Image source={require('../../assets/in1.png')} style={{
                    width: '100%',
                    margin: 0,
                    alignSelf: 'center',
                    height: 200,
                    resizeMode: 'contain'
                }} />


                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    margin: 10,
                    textAlign: 'justify'
                }}>
                    Pemanfaatan Larva Black Soldier Fly (BSF) Dalam Biokonversi Sampah Organik Warga Dari 15 ribu Maggot dapat menghabiskan sekitar 2 kg makanan dan limbah organik hanya dalam waktu 24 jam saja. Dan menjadi bermanfaat untuk pakan ikan atau unggas yg memiliki kandungan 60 persen protein.
                    {'\n\n'}
                    Indonesia diperkirakan menghasilkan 64 juta ton sampah setiap tahun. Berdasarkan data Kementerian Lingkungan Hidup dan Kehutanan (KLHK), komposisi sampah didominasi oleh sampah organik, yakni mencapai 60% dari total sampah. Sampah organik merupakan sampah yang bisa terurai secara alami karena berasal dari sisa-sisa makhluk hidup. Namun sampah organik akan menjadi permasalahan besar apabila bercampur dengan jenis sampah lain dan menumpuk di Tempat Pemrosesan Akhir (TPA). Hal ini dikarenakan tumpukan sampah organik dapat menghasilkan gas metana yang sifatnya mudah meledak.
                    {'\n\n'}
                    Jika sampah organik dibiarkan menumpuk di TPA tanpa adanya pengelolaan yang baik, maka akan mengakibatkan berbagai dampak negatif seperti menimbulkan berbagai penyakit berbahaya, menimbulkan gas metana yang dapat memicu ledakan dan kebakaran, serta menimbulkan global warming dan berdampak pada perubahan iklim.
                    {'\n\n'}
                    <Text style={{
                        fontFamily: fonts.secondary[600]
                    }}>Maggot Village mengelola sampah organik menggunakan maggot. Maggot adalah larva Black Soldier Fly (BSF) yang dapat mengkonsumsi sampah organik. Maggot kaya akan kandungan protein dan asam amino esensial yang dapat digunakan sebagai pakan ikan dan unggas. Bekas makanan maggot dapat diolah kembali menjadi pupuk organik yang biasa disebut kasgot dan memiliki banyak manfaat bagi tanaman</Text>
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