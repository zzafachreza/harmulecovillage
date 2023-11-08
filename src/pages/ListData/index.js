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
import { storeData, getData, urlAPI, urlAPIV2 } from '../../utils/localStorage';
import axios from 'axios';
import { colors } from '../../utils/colors';
import { windowWidth, fonts } from '../../utils/fonts';

import 'intl';
import 'intl/locale-data/jsonp/en';
const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
export default function ({ navigation, route }) {
  const [refreshing, setRefreshing] = React.useState(false);
  const [data, setData] = useState([]);
  const [saldo, setSaldo] = useState({
    trx: 0,
    tarik: 0,
  })

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getDataBarang();
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {




    getDataBarang();

  }, []);

  const getDataBarang = () => {
    getData('user').then(res => {

      axios.post(urlAPIV2 + 'get_saldo', {
        fid_user: res.id
      }).then(ss => {
        console.log('saldo', ss.data);
        setSaldo(ss.data)
      })

      axios
        .post(urlAPI + '/transaksi.php', {
          fid_user: res.id,
        })
        .then(x => {
          console.log(x.data);
          setData(x.data);
        });
    });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('ListDetail', item)}
      style={{
        margin: 10,
        backgroundColor: 'white',
        elevation: 1,
      }}>
      <Text
        style={{
          padding: 10,
          fontSize: windowWidth / 30,
          color: colors.black,
          textAlign: 'center',
          backgroundColor: colors.secondary,
          fontFamily: fonts.secondary[600],
        }}>
        {item.nama_bsu}
      </Text>
      <View style={{ flexDirection: 'row', padding: 10 }}>
        <View style={{
          flex: 1,
        }}>
          <Text
            style={{

              fontSize: windowWidth / 30,
              color: colors.primary,
              fontFamily: fonts.secondary[600],
            }}>
            {item.kode}
          </Text>

        </View>
        <Text
          style={{
            flex: 1,
            fontSize: windowWidth / 30,
            color: colors.black,
            fontFamily: fonts.secondary[600],
          }}>
          {item.tanggal}
        </Text>
        <Text
          style={{
            fontSize: windowWidth / 30,
            color: colors.white,
            paddingHorizontal: 10,
            backgroundColor: item.status == "OPEN" ? colors.danger : item.status == "EXPIRED" ? colors.border : colors.success,
            fontFamily: fonts.secondary[600],
          }}>
          {item.status}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 1,
          borderTopColor: colors.tertiary,
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            // flex: 1,
          }}>
          <Text
            style={{
              fontSize: windowWidth / 30,
              fontFamily: fonts.secondary[600],
              color: colors.black,
            }}>
            {item.nama_lengkap}
          </Text>
          <Text
            style={{
              fontSize: windowWidth / 30,
              textAlign: 'center',
              color: colors.black,
            }}>
            {item.telepon}
          </Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',

            flex: 1,
          }}>
          <Text
            style={{
              fontSize: windowWidth / 25,
              fontFamily: fonts.secondary[600],
              color: colors.black,
              paddingHorizontal: 10,
            }}>
            {item.total_qty} kg
          </Text>

        </View>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'center',

            flex: 1,
          }}>
          <Text
            style={{
              fontSize: windowWidth / 25,
              fontFamily: fonts.secondary[600],
              color: colors.secondary,
            }}>
            {new Intl.NumberFormat().format(item.total_harga)}
          </Text>

        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
        />
      }
      style={{
        padding: 10,
      }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
      }}>
        <View>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12,
            textAlign: 'center'
          }}>Jumlah Transaksi</Text>
          <Text style={{
            textAlign: 'center',
            fontFamily: fonts.secondary[400],
            fontSize: 15
          }}>Rp. {new Intl.NumberFormat().format(saldo.trx)}</Text>

        </View>
        <View>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12, textAlign: 'center'
          }}>Sudah Ditarik</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 15, textAlign: 'center'
          }}>Rp. {new Intl.NumberFormat().format(saldo.tarik)}</Text>

        </View>
        <View>
          <Text style={{
            fontFamily: fonts.secondary[600],
            fontSize: 12, textAlign: 'center'
          }}>Sisa Salod</Text>
          <Text style={{
            fontFamily: fonts.secondary[400],
            fontSize: 15, textAlign: 'center'
          }}>Rp. {new Intl.NumberFormat().format(saldo.tarik)}</Text>

        </View>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ScrollView >
  );
}

const styles = StyleSheet.create({});
