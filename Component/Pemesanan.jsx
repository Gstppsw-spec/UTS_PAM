'use strict';
import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import { Input } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/FontAwesome';
import boat from '../Asset/boat.png'
import ModalSelector from 'react-native-modal-selector'
import { NavigationRouteContext } from '@react-navigation/native';
import Modal from "react-native-modal";



class Pemesanan extends Component {
    constructor() {
        super();

        this.state = {
            PelabuhanAwal: '',
            PelabuhanTujuan: '',
            Layanan: '',
            Tanggal: '',
            Jam: '',
            Jumlah: '',

        }
    }


    render() {

        let index = 0;
        const Layanan_Kapal = [
            { key: index++, label: 'Express' },
            { key: index++, label: 'Economy' },
        ];

        const Pelabuhan_Awal = [
            { key: index++, label: 'Merak' },
            { key: index++, label: 'Baeukehuni' },
            { key: index++, label: 'Cirebon' },
            { key: index++, label: 'Kalimas' },
            { key: index++, label: 'Kamal' },
        ];

        const Tanggal_Berangkat = [
            { key: index++, label: 'Jumat, 25 Maret 2022' },
            { key: index++, label: 'Sabtu, 26 Maret 2022' },
            { key: index++, label: 'Minggu, 27 Maret 2022' },
            { key: index++, label: 'Senin, 28 Maret 2022' },
            { key: index++, label: 'Selasa, 29 Maret 2022' },
        ];
        const Jam_Berangkat = [
            { key: index++, label: '08:00 WIB' },
            { key: index++, label: '08:30 WIB' },
            { key: index++, label: '09:00 WIB' },
            { key: index++, label: '09:30 WIB' },
            { key: index++, label: '10:00 WIB' },
            { key: index++, label: '10:30 WIB' },
            { key: index++, label: '11:00 WIB' },
            { key: index++, label: '11:30 WIB' },
            { key: index++, label: '12:00 WIB' },
            { key: index++, label: '12:30 WIB' },
            { key: index++, label: '13:00 WIB' },
            { key: index++, label: '13:30 WIB' },
            { key: index++, label: '14:00 WIB' },
            { key: index++, label: '14:30 WIB' },
            { key: index++, label: '15:00 WIB' },
            { key: index++, label: '15:30 WIB' },
            { key: index++, label: '16:00 WIB' },
        ];
        const Jumlah_Pesanan = [
            { key: index++, label: 'Dewasa       1 Orang' },
            { key: index++, label: 'Dewasa       2 Orang' },
        ];
        const Pelabuhan_Tujuan = [
            { key: index++, label: 'Merak' },
            { key: index++, label: 'Pangkal Pinang' },
            { key: index++, label: 'Teluk Naga' },
            { key: index++, label: 'Siborong Borong' },
            { key: index++, label: 'Baeukehuni' },
        ];

        const navigation = this.props.navigation;
        const Cari = () => {
            navigation.navigate('rincian', {
                PelabuhanAwal: this.state.PelabuhanAwal,
                PelabuhanTujuan: this.state.PelabuhanTujuan,
                Layanan: this.state.Layanan,
                Tanggal: this.state.Tanggal,
                Jam: this.state.Jam,
                Jumlah: this.state.Jumlah
            });
        }
        const pesanan = () => {
            navigation.navigate('daftar_pemesanan',
                {
                    PelabuhanAwal: this.state.PelabuhanAwal,
                    PelabuhanTujuan: this.state.PelabuhanTujuan,
                    Layanan: this.state.Layanan,
                    Tanggal: this.state.Tanggal,
                    Jam: this.state.Jam,
                    Jumlah: this.state.Jumlah

                });
        }
        const pembatalan = () => {
            navigation.navigate('daftar_pembatalan', {
                PelabuhanAwal: this.state.PelabuhanAwal,
                PelabuhanTujuan: this.state.PelabuhanTujuan,
                Layanan: this.state.Layanan,
                Tanggal: this.state.Tanggal,
                Jam: this.state.Jam,
                Jumlah: this.state.Jumlah
            });
        }

        const pemesanan = () => {
            navigation.navigate('home');
        }


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50, }}>
                        <View style={styles.formContainer}>
                            <View style={{ textAlign: 'center', marginBottom: 20, paddingBottom: 15 }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'blue', textAlign: 'center' }}>Kapalzy</Text>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector

                                        data={Pelabuhan_Awal}
                                        initValue=""
                                        onChange={option => { this.setState({ PelabuhanAwal: option.label }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}
                                            label="Pelabuhan Awal"
                                            editable={false}
                                            placeholder="Pilih Pelabuhan Awal"
                                            value={this.state.PelabuhanAwal}
                                            leftIcon={<FontAwesome name="ship" size={20} color='#88b454' />}
                                            leftIconContainerStyle={{
                                                padding: 10,
                                            }} />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector
                                        data={Pelabuhan_Tujuan}
                                        initValue=""
                                        onChange={option => { this.setState({ PelabuhanTujuan: option.label }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}
                                            label="Pelabuhan Tujuan"
                                            editable={false}
                                            placeholder="Pilih Pelabuhan Tujuan"
                                            value={this.state.PelabuhanTujuan}
                                            leftIcon={<FontAwesome name="ship" size={20} color='#88b454' />}
                                            leftIconContainerStyle={{
                                                padding: 10,
                                            }} />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector

                                        data={Layanan_Kapal}
                                        initValue=""
                                        onChange={option => { this.setState({ Layanan: option.label }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}
                                            label="Kelas Layanan"
                                            editable={false}
                                            placeholder="Pilih Layanan"
                                            value={this.state.Layanan}
                                            leftIcon={<FontAwesome name="chair" size={20} color='#88b454' />}
                                            leftIconContainerStyle={{
                                                padding: 10,
                                            }} />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector

                                        data={Tanggal_Berangkat}
                                        initValue=""
                                        onChange={option => { this.setState({ Tanggal: option.label, }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}
                                            label="Tanggal Masuk Pelabuhan"
                                            editable={false}
                                            placeholder="Pilih Tanggal Masuk"
                                            value={this.state.Tanggal}
                                            leftIcon={<FontAwesome name="calendar" size={20} color='#88b454' />}
                                            leftIconContainerStyle={{
                                                padding: 10,
                                            }} />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector

                                        data={Jam_Berangkat}
                                        initValue=""
                                        onChange={option => { this.setState({ Jam: option.label }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}
                                            label="Jam Masuk Pelabuhan"
                                            editable={false}
                                            placeholder="Pilih Jam Masuk"
                                            value={this.state.Jam}
                                            leftIcon={<FontAwesome name="clock" size={20} color='#88b454' />}
                                            leftIconContainerStyle={{
                                                padding: 10,
                                            }} />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View>
                                <View >
                                    <ModalSelector

                                        data={Jumlah_Pesanan}
                                        initValue=""
                                        onChange={option => { this.setState({ Jumlah: option.label }) }}>

                                        <Input
                                            style={{
                                                height: 30,
                                                margin: 10,
                                                borderWidth: 1,
                                                padding: 5,


                                            }}

                                            editable={false}
                                            placeholder="Jumlah"
                                            value={this.state.Jumlah}
                                        />

                                    </ModalSelector>
                                </View>
                            </View>
                            <View >

                                <TouchableOpacity
                                    style={styles.button}
                                    onPress={Cari}
                                >
                                    <Text style={styles.textButton}>
                                        Buat Tiket</Text>
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


                </View >

            </SafeAreaView >
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
    button: {
        backgroundColor: 'orange',
        color: 'orange',
        borderRadius: 15,
        height: 40,
        alignItems: 'center',
        padding: 10,
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Pemesanan;