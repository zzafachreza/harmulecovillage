import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  SafeAreaView,
  RefreshControl,
  Image,
  TouchableOpacity,
} from 'react-native';
import { storeData, getData, urlAPI } from '../../utils/localStorage';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { windowWidth, fonts } from '../../utils/fonts';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
export default function ({ navigation, route }) {
  const BSU = route.params;
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataBarang();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    getDataBarang();
  }, []);

  const getDataBarang = () => {
    axios.get(urlAPI + '/1data_sampah.php').then(res => {
      setData(res.data);
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Pinjam', item);
      }}
      style={{
        flex: 1,
        borderColor: colors.tertiary,
        borderWidth: 1,
        overflow: 'hidden',
        borderRadius: 10,
        margin: 5,
        backgroundColor: 'white',
      }}>

      <Image
        source={{ uri: item.image }}
        style={{ width: '100%', height: 150, resizeMode: 'cover' }}
      />

      <View style={{
        padding: 10,
        height: 80,
      }}>
        <Text
          style={{
            fontSize: windowWidth / 33,
            color: colors.primary,
            fontFamily: fonts.secondary[600],
          }}>
          {item.nama_sampah}
        </Text>
        <Text
          style={{
            fontSize: windowWidth / 25,
            color: colors.black,
            fontFamily: fonts.secondary[600],
          }}>
          Rp. {new Intl.NumberFormat().format(item.harga_sampah)} <Text style={{ color: colors.danger, fontFamily: fonts.secondary[400] }}>/ Kg</Text>
        </Text>

      </View>


    </TouchableOpacity>
  );

  return (
    <>
      <View style={{
        padding: 10,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
      }}>

        <Text style={{
          fontFamily: fonts.secondary[600],
          fontSize: 20,
          color: colors.white,
        }}>{BSU.nama_bsu}</Text>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[colors.primary]}
          />
        }
        style={{
          backgroundColor: colors.white,
        }}>

        <View style={{
          padding: 20,
        }}>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView >
    </>
  );
}

const styles = StyleSheet.create({});
