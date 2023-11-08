import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import RenderHtml from 'react-native-render-html';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import Share from 'react-native-share';

export default function ArtikelDetail({ navigation, route }) {
    const item = route.params;
    return (
        <ScrollView style={{
            flex: 1,
        }}>
            <Image source={{
                uri: item.image
            }} style={{
                width: '100%',
                height: 250,
            }} />
            <TouchableOpacity style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: colors.primary,
                width: 120,
                margin: 10,
                borderRadius: 10,
                alignSelf: 'flex-end'
            }} onPress={() => {
                Share.open({
                    url: item.link
                })
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        err && console.log(err);
                    });
            }}>
                <Icon type='ionicon' name='share-social-outline' color={colors.white} size={20} />
                <Text style={{
                    left: 10,
                    fontFamily: fonts.secondary[400],
                    fontSize: 14,
                    color: colors.white
                }}>Bagikan</Text>
            </TouchableOpacity>
            <View style={{
                padding: 20,
                flex: 1,
            }}>
                <Text style={{
                    fontFamily: fonts.secondary[800],
                    marginVertical: 5,
                    fontSize: 15,
                    color: colors.black
                }}>{item.judul}</Text>
                <Text style={{
                    fontFamily: fonts.secondary[400],
                    fontSize: 12,
                    color: colors.black,
                }}>Tanggal upload hari {moment(item.tanggal).format('dddd, DD MMMM YYYY')} Pukul {item.jam}</Text>
                <RenderHtml
                    contentWidth={'100%'}
                    source={{
                        html: item.keterangan
                    }}
                />

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({})