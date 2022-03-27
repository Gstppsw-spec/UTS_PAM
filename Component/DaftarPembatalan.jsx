import React, { Component } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

class DaftarPembatalan extends Component {
    render() {
        const navigation = this.props.navigation;
        const route = this.props.route;

        const pesanan = () => {
            navigation.navigate('daftar_pemesanan', {
                PelabuhanAwal,
                PelabuhanTujuan,
                Layanan,
                Tanggal,
                Jam,
                Jumlah,
            });
        }
        const pembatalan = () => {
            navigation.navigate('daftar_pembatalan', {
                PelabuhanAwal,
                PelabuhanTujuan,
                Layanan,
                Tanggal,
                Jam,
                Jumlah,
            });
        }

        const pemesanan = () => {
            navigation.navigate('home');
        }
        const { PelabuhanAwal, PelabuhanTujuan, Layanan, Tanggal, Jam, Jumlah } = route.params;
        let harga;
        let penumpang;
        let total;
        if (Jumlah == 'Dewasa       1 Orang') {
            harga = 'Rp 65.000'
            penumpang = 'Dewasa x 1'

        }
        else if (Jumlah == 'Dewasa       2 Orang') {
            harga = 'Rp 130.000'
            penumpang = 'Dewasa x 2'

        }
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <View style={{ flex: 1, justifyContent:'center', alignItems:'center'}}>

                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'blue', textAlign: 'center' }}>
                            Tidak Ada Aktivitas Pembatalan Tiket
                        </Text>
                    </View>





                </View>
                <View style={{ height: 60, backgroundColor: 'white', flexDirection: 'row', shadowColor: 'black', shadowRadius: 3, shadowOpacity: 0.3, position: 'relative' }}>
                    <TouchableOpacity
                        onPress={pemesanan}
                        style={{ flex: 1, alignItems: 'center', marginTop: 5, }}
                    >

                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../Asset/blue_home.png')} style={{ width: 28, height: 28, }} />



                        </View>
                        <Text style={styles.botbar}>Beranda</Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ flex: 1, alignItems: 'center', marginTop: 5, }}
                        onPress={pesanan}
                    >

                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../Asset/blue_book.png')} style={{ width: 28, height: 28, }} />



                        </View>
                        <Text style={styles.botbar}>Pesanan Saya</Text>

                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={pembatalan}
                        style={{ flex: 1, alignItems: 'center', marginTop: 5, }}
                    >

                        <View style={{ width: 26, height: 26, }}>
                            <Image source={require('../Asset/pembatalan.png')} style={{ width: 28, height: 28, }} />
                        </View>
                        <Text style={styles.botbar}>Pembatalan</Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={{ flex: 1, alignItems: 'center', marginTop: 5, }}>

                        <View style={{ width: 26, height: 26, }}>

                            <Image source={require('../Asset/lainnya.png')} style={{ width: 28, height: 28, }} />


                        </View>
                        <Text style={styles.botbar}>Lainnya</Text>

                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({

    botbar: {
        color: '#87CEFA',
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 12,
    },

})

export default DaftarPembatalan;