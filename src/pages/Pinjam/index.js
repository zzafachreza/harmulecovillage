import React, { useRef, useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { colors } from '../../utils/colors';
import { fonts, windowHeight, windowWidth } from '../../utils/fonts';
import { MyButton, MyGap } from '../../components';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { Modalize } from 'react-native-modalize';
import { showMessage } from 'react-native-flash-message';
import { getData, storeData, urlAPI } from '../../utils/localStorage';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';

export default function Pinjam({ navigation, route }) {
  const item = route.params;
  navigation.setOptions({
    headerShown: false,
  });

  const isFocused = useIsFocused();

  const [jumlah, setJumlah] = useState(1);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState(0);

  useEffect(() => {
    if (isFocused) {
      getData('user').then(res => {
        console.log('data user', res);
        setUser(res);
      });
      getData('cart').then(res => {
        console.log(res);
        setCart(res);
      });
    }
  }, [isFocused]);

  const modalizeRef = useRef();

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const addToCart = () => {
    const kirim = {
      fid_user: user.id,
      fid_sampah: item.id,
      harga: item.harga_sampah,
      qty: jumlah,
      total: item.harga_sampah * jumlah
    };
    console.log('kirim tok server', kirim);
    axios
      .post(urlAPI + '/1add_cart.php', kirim)
      .then(res => {
        console.log(res);

        showMessage({
          type: 'success',
          message: 'Berhasil ditambahkan ke keranjang',
        });
        navigation.goBack();
        modalizeRef.current.close();
      });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View
        style={{
          height: 50,
          // padding: 10,
          paddingRight: 10,
          backgroundColor: colors.primary,

          flexDirection: 'row',
        }}>
        <View style={{ justifyContent: 'center' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon type="ionicon" name="arrow-back" color={colors.white} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: windowWidth / 20,
              color: colors.white,
            }}>
            {item.nama_sampah}
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
        }}>
        <Image

          style={{
            height: windowHeight / 2.5,
            width: windowWidth
          }}
          source={{
            uri: item.image,
          }}
        />

        <View
          style={{
            backgroundColor: colors.white,
            flex: 1,
          }}>
          <View
            style={{
              padding: 10,
            }}>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.secondary,
              }}>
              Rp. {new Intl.NumberFormat().format(item.harga_sampah)}<Text style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.black,
              }}>/Kg</Text>
            </Text>
            <Text
              style={{
                fontFamily: fonts.secondary[600],
                fontSize: windowWidth / 20,
                color: colors.primary,
              }}>
              {item.nama_sampah}
            </Text>
          </View>
        </View>
      </View>

      <MyButton
        Icons="cart-outline"
        fontWeight="bold"
        radius={0}
        title="JUAL SAMPAH INI"
        warna={colors.primary}
        onPress={onOpen}
      />


      <Modalize
        withHandle={false}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        snapPoint={windowHeight}
        HeaderComponent={
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 100,
                    borderRadius: 20,
                    aspectRatio: 1,
                  }}
                  source={{ uri: item.image }}
                />
              </View>
              <View style={{ flex: 1, padding: 10, justifyContent: 'center' }}>
                <Text
                  style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: 20,
                    color: colors.black,
                  }}>
                  Rp. {new Intl.NumberFormat().format(item.harga_sampah * jumlah)}
                </Text>
              </View>
              <TouchableOpacity onPress={() => modalizeRef.current.close()}>
                <Icon type="ionicon" name="close-outline" size={35} />
              </TouchableOpacity>
            </View>
          </View>
        }
        withHandle={false}
        ref={modalizeRef}>
        <View style={{ flex: 1, height: windowWidth }}>
          <View style={{ padding: 10, flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: fonts.secondary[600],
                    color: colors.black,
                  }}>
                  Jumlah (Kg)
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',

                  justifyContent: 'space-around',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    jumlah == 1
                      ? showMessage({
                        type: 'danger',
                        message: 'Minimal penjualan 1 kg',
                      })
                      : setJumlah(jumlah - 1);
                  }}
                  style={{
                    backgroundColor: colors.primary,
                    width: '30%',
                    borderRadius: 10,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginRight: 10,
                  }}>
                  <Icon type="ionicon" name="remove" color={colors.white} />
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 40,
                  }}>

                  <TextInput onChangeText={x => setJumlah(x)} keyboardType='number-pad' value={jumlah.toString()} style={{ fontSize: 20, textAlign: 'center', fontFamily: fonts.secondary[600] }} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    jumlah >= item.stok
                      ? showMessage({
                        type: 'danger',
                        message: 'Pembelian melebihi batas !',
                      })
                      : setJumlah(jumlah + 1);
                  }}
                  style={{
                    backgroundColor: colors.primary,
                    width: '30%',
                    borderRadius: 10,
                    marginLeft: 10,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon type="ionicon" name="add" color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>


            <View style={{ marginTop: 15 }}>
              <TouchableOpacity
                onPress={addToCart}
                style={{
                  backgroundColor: colors.secondary,
                  borderRadius: 10,
                  padding: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.secondary[600],
                    fontSize: windowWidth / 22,
                    color: colors.white,
                  }}>
                  SIMPAN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modalize>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
