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
export default function TentangKami() {


    return (
        <SafeAreaView style={{
            flex: 1,
            padding: 10,
            backgroundColor: colors.white
        }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Judul label="Tentang Harmul Eco-Village" />
                <View style={styles.card}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        textAlign: 'center'
                    }}>Harmul Eco-Village</Text>
                    <Text style={{
                        marginTop: 10,
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        textAlign: 'center'
                    }}>Merupakan Layanan Edukasi, Inovasi dan Jasa Pengelolaan Sampah Berbasis Masyarakat dalam mendukung ketahanan pangan untuk mewujudkan Pengelolaan Kampung Kota Berkelanjutan.</Text>
                </View>
                <Judul label="Kenapa Harus Harmul Eco-Village?" />
                <View style={styles.card}>
                    <Image source={require('../../assets/T1.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 250,
                        resizeMode: 'contain'
                    }} />
                </View>
                <Judul label="Profil" />
                <View style={styles.card}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        textAlign: 'center',
                        marginBottom: 10,
                    }}>Harmul Eco-village berdiri pada Juli 2022 berdasarkan:</Text>

                    <NomorList no={1} label="Surat Keputusan Lurah Kelurahan Harapan Mulia Nomor 97 Tahun 2022 tanggal 18 Juli 2022 tentang Inovasi Harmul Eco-village." />
                    <NomorList no={2} label="Surat Keputusan Camat Kecamatan Kemayoran Nomor 449 Tahun 2022 tanggal 28 Juni 2022 tentang Inovasi Harmul   Eco-village." />
                    <NomorList no={3} label="Surat Keputusan Walikota Kota Administrasi Jakarta Pusat Nomor e-0056 Tahun 2023 tanggal 14 Juni 2023 tentang Data Inovasi Daerah di Wilayah Kota Administrasi Jakarta Pusat Tahun 2021-2022. " />
                    <NomorList no={4} label="Surat Keputusan Gubernur Provinsi DKI Jakarta Nomor 456 Tahun 2023 tanggal 10 Juli 2023 tentang Penetapan Nama-nama Inovasi Daerah Tahun 2022. " />
                    <NomorList no={5} label="Telah terdaftar di Kementerian Hukum dan HAM dengan Surat Pencatatan Ciptaan SK Nomor EC00202317279, 27 Februari Tahun 2023 Judul Ciptaan Harmul Eco-Village." />
                    <Image source={require('../../assets/T2.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 400,
                        resizeMode: 'contain'
                    }} />
                    <Text style={styles.desc}>
                        Harmul Ecovillage adalah sebuah aplikasi berbasis android yang merupakan Layanan Edukasi, Inovasi dan Jasa Pengelolaan Sampah Berbasis Masyarakat dalam mendukung ketahanan pangan untuk mewujudkan Pengelolaan Kampung Kota Berkelanjutan.
                    </Text>
                </View>

                <Judul label="Tim Inovasi" />
                <View style={styles.card}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        textAlign: 'center',
                    }}>Tim Inovasi Harmul Eco-village</Text>
                    <Image source={require('../../assets/T3.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 250,
                        alignSelf: 'center',
                        resizeMode: 'contain'
                    }} />
                </View>

                <Judul label="Prestasi / Achievement" />
                <View style={styles.card}>
                    <NomorList no={1} label="Juara 3 Three Minute Telling Innovation Competition (TMTiC) Tahun 2022 dari SKSG Universitas Indonesia." />
                    <NomorList no={2} label="Penghargaan Kampung Kota Utama dari Jakarta Lestari Award Tahun 2023 dari ikatan Arsitektur Indonesia-Jakarta." />
                    <NomorList no={3} label="Penghargaan PNS Berprestasi Tahun 2023 dari Gubernur Provinsi DKI Jakarta." />
                    <Image source={require('../../assets/T4.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 300,
                        alignSelf: 'center',
                        resizeMode: 'contain'
                    }} />
                    <Image source={require('../../assets/T5.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 300,
                        alignSelf: 'center',
                        resizeMode: 'contain'
                    }} />
                    <Image source={require('../../assets/T6.png')} style={{
                        width: '100%',
                        margin: 10,
                        height: 300,
                        alignSelf: 'center',
                        resizeMode: 'contain'
                    }} />
                </View>
                <Judul label="Hubungi Kami" />
                <View style={styles.card}>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 14,
                        textAlign: 'center',
                    }}>Kontak kami di :</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[600],
                        fontSize: 16,
                        textAlign: 'center',
                    }}>Harmul Eco-Village</Text>
                    <Text style={{
                        fontFamily: fonts.secondary[400],
                        fontSize: 14,
                        textAlign: 'center',
                    }}>Jl. Cempaka Wangi II, Kelurahan Harapan Mulia Kecamatan Kemayoran Kota Administrasi Jakarta Pusat
                        {'\n'} HP. 0857-1622-0125
                        {'\n'} harmulecovillage@gmail.com</Text>

                </View>


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