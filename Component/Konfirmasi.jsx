import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Modal } from 'react-native';



class Konfirmasi extends Component {
    render() {
        const navigation = this.props.navigation;
        const route = this.props.route;

        const submit = () => {
            navigation.navigate('home', {
                PelabuhanAwal,
                PelabuhanTujuan,
                Layanan,
                Tanggal,
                Jam,
                Jumlah,
            });

        }

        const pesanan = () => {
            navigation.navigate('daftar_pemesanan', {
                PelabuhanAwal,
                PelabuhanTujuan,
                Layanan,
                Tanggal,
                Jam,
                Jumlah,
                harga,
                penumpang,
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
                harga,
                penumpang,
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
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
                        <View style={styles.formContainer}>
                            <View style={{ textAlign: 'center', marginBottom: 20, paddingBottom: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue', textAlign: 'center' }}>Kapalzy</Text>
                            </View>
                            <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 17, paddingBottom: 15 }}>Informasi Pemesanan</Text>
                            </View>


                            <View style={styles.formContainer_2}>
                                <View style={{
                                    flexDirection: 'row',
                                    flexWrap: 'wrap',
                                    alignItems: 'stretch',
                                }}>
                                    <Text style={{
                                        width: '40%',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                        fontSize: 20,
                                    }}>{PelabuhanAwal}</Text>
                                    <Text style={{
                                        width: '28%',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                    }}> - </Text>
                                    <Text style={{
                                        width: '32%',
                                        fontWeight: 'bold',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        fontSize: 20,
                                    }}>{PelabuhanTujuan}</Text>
                                </View>

                                <Text style={{ paddingTop: 20, paddingLeft: 8, fontWeight: 'bold' }}>
                                    Jadwal Masuk Pelabuhan
                                </Text>
                                <Text style={{ paddingTop: 10, paddingLeft: 8, }}>
                                    {Tanggal}
                                </Text>
                                <Text style={{ paddingTop: 10, paddingLeft: 8, }}>
                                    {Jam}
                                </Text>
                                <Text style={{ paddingTop: 20, paddingLeft: 8, fontWeight: 'bold' }}>
                                    Layanan
                                </Text>
                                <Text style={{ paddingTop: 10, paddingLeft: 8, }}>
                                    {Layanan}
                                </Text>
                                <View
                                    style={{
                                        borderBottomColor: 'black',
                                        borderBottomWidth: 1,
                                        paddingTop: 20,
                                        marginLeft: 10,
                                        marginRight: 10,
                                    }}
                                />

                                <View style={styles.row}>
                                    <Text style={styles.col1}>{penumpang}</Text>
                                    <Text style={styles.col1}>  </Text>
                                    <Text style={styles.col1}>{harga}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={{
                                    height: 10,
                                    margin: 6,
                                    padding: 5,
                                    paddingBottom: 15,
                                    fontSize: 18,
                                    fontWeight: 'bold'
                                }}>Data Pemesan</Text>
                            </View>

                            <View>
                                <Text style={{
                                    height: 10,
                                    margin: 6,
                                    padding: 5,
                                    fontWeight: 'bold'
                                }}>Lokasi Tujuan</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                    }}

                                    autoCompleteType={undefined}
                                    placeholder="Mulan Jamila"
                                />

                            </View>
                            <View>
                                <Text style={{
                                    height: 10,
                                    margin: 6,
                                    padding: 5,
                                    fontWeight: 'bold'
                                }}>Identitas</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                    }}

                                    autoCompleteType={undefined}
                                    placeholder="Perempuan"
                                />
                            </View>
                            <View>
                                <Text style={{
                                    height: 10,
                                    margin: 6,
                                    padding: 5,
                                    fontWeight: 'bold',


                                }}>Umur</Text>
                                <TextInput
                                    style={{
                                        height: 40,
                                        margin: 12,
                                        borderWidth: 1,
                                        padding: 10,
                                    }}

                                    autoCompleteType={undefined}
                                    placeholder="40 Tahun"
                                />
                            </View>

                            <View style={{ paddingTop: 20 }}>
                                <TouchableOpacity
                                    style={styles.button2}
                                    onPress={submit}
                                >
                                    <Text style={styles.textButton2}>
                                        Submit</Text>
                                </TouchableOpacity>


                            </View>

                        </View>
                    </View>
                </ScrollView>
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
    container: {
        backgroundColor: '#88b454',
    },

    formContainer: {
        backgroundColor: 'white',
        margin: 10,
        padding: 10,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        flex: 1,
    },
    fieldContainer: {
        marginHorizontal: 10,
        marginVertical: 10,
        paddingTop: 2,
    },
    button1: {
        backgroundColor: 'white',
        color: 'white',
        borderRadius: 5,
        height: 40,
        padding: 10,
        flex: 0.5,
        borderColor: "blue",
        borderWidth: 2,
        marginRight: 10
    },
    button2: {
        backgroundColor: 'blue',
        color: 'white',
        borderRadius: 5,
        height: 40,
        padding: 10,

    },
    formContainer_2: {
        backgroundColor: 'white',
        margin: 5,
        padding: 5,
        paddingTop: 30,
        borderRadius: 5,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.3,
        height: 350,

    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        textAlign: 'center',
        alignItems: 'center'
    },
    col1: {
        width: '33%',
        alignItems: 'center',
        paddingTop: 20,
        textAlign: 'center',

    },
    col2: {
        width: '33%',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textButton1: {
        color: 'blue',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        borderColor: 'blue'
    },
    textButton2: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Konfirmasi;
