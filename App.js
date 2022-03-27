import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Pemesanan from './Component/Pemesanan';
import PemesananaLagi from './Component/PemesananaLagi';
import Konfirmasi from './Component/Konfirmasi';
import DaftarPemesanan from './Component/DaftarPemesanan';
import DaftarPembatalan from './Component/DaftarPembatalan';
console.reportErrorsAsExceptios = false;
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"home"}
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'blue',
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Pemesanan}
          options={{
            title: "",
            headerLeft: () => <FontAwesome name="bars" size={24} color="white" style={{ marginLeft: 20 }} />,
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />
        <Stack.Screen
          name="rincian"
          component={PemesananaLagi}
          options={{
            title: "Rincian",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />

        <Stack.Screen
          name="konfirmasi"
          component={Konfirmasi}
          options={{
            title: "Konfirmasi",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />
        <Stack.Screen
          name="daftar_pemesanan"
          component={DaftarPemesanan}
          options={{
            title: "Daftar Pemesanan",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />
        <Stack.Screen
          name="daftar_pembatalan"
          component={DaftarPembatalan}
          options={{
            title: "Daftar Pembatalan",
            headerRight: () => <FontAwesome name="user-alt" size={24} color="white" style={{ marginRight: 20 }} />,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// import React, { Component } from 'react'

// import { View, SafeAreaView, Text } from 'react-native'
// import { TextInput } from 'react-native'
// import { Input } from 'react-native-elements';

// export default class App extends Component {
//   render() {
//     return (
//       <SafeAreaView style={{ flex: 1 }}>
//         <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
//           <View style={{
//             backgroundColor: 'white',
//             margin: 40,
//             padding: 40,
//             paddingTop: 30,
//             borderRadius: 5,
//             shadowColor: 'black',
//             shadowRadius: 3,
//             shadowOpacity: 0.3,
//             flex: 1,
//           }}>
//             <View>
//               <Text style={{ textAlign: 'center' }}>Kapalzy</Text>
//             </View>
//             <View>
//               <Input
//                 style={{
//                   height: 30,
//                   margin: 10,
//                   borderWidth: 1,
//                   padding: 5,


//                 }}

//                 editable={false}
//                 placeholder=""
//                 label='Pelabuhan asal'

//               />
//             </View>

//           </View>


//         </View >

//         <View style={{
//           height:40,
//           borderRadius: 5,
//           shadowColor: 'black',
//           shadowRadius: 3,
//           shadowOpacity: 0.3,
//         }}>

//         </View>
//       </SafeAreaView>
//     )
//   }


