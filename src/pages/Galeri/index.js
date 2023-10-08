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
import { storeData, getData, urlAPI, urlAPIV2 } from '../../utils/localStorage';
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


export default function Galeri(navigation, route) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(urlAPIV2 + 'galeri').then(res => {

            setData(res.data);
        })
    }, []);

    const __renderItem = ({ item }) => {
        return (
            <View style={{
                flex: 1,
                margin: 10
            }}>
                <Image source={{
                    uri: item.image
                }} style={{
                    width: '100%',
                    height: 250,
                    resizeMode: 'contain'
                }} />
            </View>
        )
    }
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white,
            padding: 10,
        }}>
            <FlatList data={data} renderItem={__renderItem} numColumns={1} showsVerticalScrollIndicator={false} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})