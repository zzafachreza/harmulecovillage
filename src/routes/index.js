import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  GetStarted,
  Login,
  Register,
  Home,
  Account,
  Success,
  Berita,
  Tambah,
  Success2,
  ListDetail,
  Search,
  Kategori,
  ListData,
  Barang,
  Cart,
  Checkout,
  Bayar,
  Pemakaian,
  PemakaianTambah,
  BarangPemakaian,
  Akses,
  Bayar2,
  Search2,
  Laporan,
  Hadiah,
  Redeem,
  ListRedeem,
  Wa,
  Brand,
  Pilihan,
  Masuk,
  Keluar,
  ProfileLab,
  EditProfile,
  Pinjam,
  ListData2,
  Jadwal,
  SuratIzin,
  Jenis,
  Asset,
  Add,
  Add2,
  AddSatu,
  AddDua,
  Kuis,
  Bsu,
  Inovasi,
  TentangKami,
  In1,
  In2,
  In3,
  In4,
  Galeri,
  Artikel,
  ArtikelDetail,
  Kursus,
  KursusDetail,
  Testimoni,
} from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigator } from '../components';
import { colors } from '../utils/colors';
import { color } from 'react-native-reanimated';
import { fonts } from '../utils';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="History" component={ListData} />
      {/*<Tab.Screen name="Cart" component={Cart} />  */}
      {/* <Tab.Screen name="Notifikasi" component={Notifikasi} /> */}
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default function Router() {
  return (
    <Stack.Navigator initialRouteName={'Splash'}>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Wa"
        component={Wa}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Pilihan"
        component={Pilihan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Keluar"
        component={Keluar}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Brand"
        component={Brand}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name="ListData"
        component={ListData}
        options={{
          headerShown: false,
        }}
      /> */}
      <Stack.Screen
        name="Pemakaian"
        component={Pemakaian}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PemakaianTambah"
        component={PemakaianTambah}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Success"
        component={Success}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="Success2"
        component={Success2}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Laporan"
        component={Laporan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerTitle: 'Login',
          headerShown: false,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />


      <Stack.Screen
        name="TentangKami"
        component={TentangKami}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Tentang Kami',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="In1"
        component={In1}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Maggot Village',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="In2"
        component={In2}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Kolam ASA',
          headerShown: true,
        }}
      />


      <Stack.Screen
        name="In3"
        component={In3}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'SEL-BI',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="In4"
        component={In4}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'AURA',
          headerShown: true,
        }}
      />


      <Stack.Screen
        name="Galeri"
        component={Galeri}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Galeri',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="Artikel"
        component={Artikel}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Kabar Terbaru',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="ArtikelDetail"
        component={ArtikelDetail}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Kabar Terbaru',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Kursus"
        component={Kursus}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'User Kursus',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="Testimoni"
        component={Testimoni}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Testimoni',
          headerShown: true,
        }}
      />

      <Stack.Screen
        name="KursusDetail"
        component={KursusDetail}
        options={{

          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Kabar Terbaru',
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Bsu"
        component={Bsu}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Bank Sampah Singgi',
          headerShown: true,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />

      <Stack.Screen
        name="Inovasi"
        component={Inovasi}
        options={{
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontSize: 25,
            fontFamily: fonts.secondary[600]
          },
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          headerTitle: 'Inovasi',
          headerShown: true,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />

      <Stack.Screen
        name="Add"
        component={Add}
        options={{
          headerTitle: 'Tukar Uang Dengan Pulsa',
          headerShown: false,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />



      <Stack.Screen
        name="AddSatu"
        component={AddSatu}
        options={{
          headerTitle: 'COMPELETE THE FORM',
          headerTitle: 'COMPELETE THE FORM',
          headerShown: true,
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            colors: colors.white
          },


          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />


      <Stack.Screen
        name="AddDua"
        component={AddDua}
        options={{
          headerTitle: 'COMPELETE THE FORM',
          headerShown: true,
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            colors: colors.white
          },

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />

      <Stack.Screen
        name="Add2"
        component={Add2}
        options={{
          headerTitle: 'Tukar Uang Dengan Pulsa',
          headerShown: false,

          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{
          headerTitle: 'Register',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Search2"
        component={Search2}
        options={({ route, navigation }) => ({
          title: 'Layanan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="ProfileLab"
        component={ProfileLab}
        options={({ route, navigation }) => ({
          title: 'Profile Lab',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Hadiah"
        component={Hadiah}
        options={({ route, navigation }) => ({
          title: 'Daftar Hadiah',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Redeem"
        component={Redeem}
        options={({ route, navigation }) => ({
          title: 'Redeem Point',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Kategori"
        component={Kategori}
        options={({ route, navigation }) => ({
          title: 'Detail Pembantu',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Cart"
        component={Cart}
        options={({ route, navigation }) => ({
          title: 'Keranjang',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={({ route, navigation }) => ({
          title: 'Checkout',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Bayar"
        component={Bayar}
        options={({ route, navigation }) => ({
          title: 'PEMBAYARAN VIA TRANSFER',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Bayar2"
        component={Bayar2}
        options={({ route, navigation }) => ({
          title: 'PEMBAYARAN VIA COD',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Barang"
        component={Barang}
        options={({ route, navigation }) => ({
          title: 'Detail Barang',
          headerShown: false,
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="BarangPemakaian"
        component={BarangPemakaian}
        options={({ route, navigation }) => ({
          title: 'Detail Barang',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Akses"
        component={Akses}
        options={({ route, navigation }) => ({
          title: 'Pilih Absensi Masuk Atau Keluar',
          headerTintColor: 'white',
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />


      <Stack.Screen
        name="Jenis"
        component={Jenis}
        options={({ route, navigation }) => ({
          title: 'Pilih Jenis Abesen',
          headerTintColor: 'white',
          headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="SuratIzin"
        component={SuratIzin}
        options={({ route, navigation }) => ({
          title: 'Pengajuan Surat Izin / Sakit / Cuti',
          headerTintColor: colors.white,
          // headerShown: false,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={({ route, navigation }) => ({
          title: 'Edit Profile',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Pinjam"
        component={Pinjam}
        options={({ route, navigation }) => ({
          title: 'Pinjam Alat & Bahan',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />
      <Stack.Screen
        name="ListData"
        component={ListData}
        options={({ route, navigation }) => ({
          title: 'HISTORY ABSENSI',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />
      <Stack.Screen
        name="ListData2"
        component={ListData2}
        options={({ route, navigation }) => ({
          title: 'HISTORY IZIN / SAKIT / CUTI',
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Jadwal"
        component={Jadwal}
        options={({ route, navigation }) => ({
          title: 'PENJADWALAN PENGGUNAAN LAB',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="Tambah"
        component={Tambah}
        options={({ route, navigation }) => ({
          title: 'TAMBAH',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />

      <Stack.Screen
        name="ListDetail"
        component={ListDetail}
        options={({ route, navigation }) => ({
          title: 'LIST DETAIL',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.primary,
            elevation: 0, // remove shadow on Android
          },
          cardStyleInterpolator: ({ current, layouts }) => {
            return {
              cardStyle: {
                transform: [
                  {
                    translateX: current.progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: [layouts.screen.width, 0],
                    }),
                  },
                ],
              },
            };
          },
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
