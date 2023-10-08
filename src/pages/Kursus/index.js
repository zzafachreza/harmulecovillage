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


export default function Kursus({ navigation, route }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post(urlAPIV2 + 'kursus').then(res => {
            console.log('kursus', res.data);
            setData(res.data);
        })
    }, []);

    const __renderItem = ({ item }) => {
        return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('KursusDetail', item)}>
                <View style={{
                    flex: 1,
                    margin: 10,
                    padding: 10,
                    borderWidth: 1,
                    borderColor: colors.primary,
                    borderRadius: 10,
                    flexDirection: 'row'
                }}>

                    <View style={{
                        padding: 10,
                        flex: 1,
                        borderColor: colors.primary
                    }}>
                        <Text style={{
                            fontFamily: fonts.secondary[600],
                            fontSize: 16,
                            color: colors.primary,
                        }}>{item.judul}</Text>
                    </View>
                    <Icon type='ionicon' name='search' color={colors.primary} />
                </View>
            </TouchableWithoutFeedback>
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