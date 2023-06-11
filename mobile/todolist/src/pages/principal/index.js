import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react";

export function Principal() {
    const navigation = useNavigation();
    const [visibleModal, setVisibleModal] = useState(false);
    function controlModal() {
        visibleModal ? setVisibleModal(false) : setVisibleModal(true);
    };
    function efetuarLogout() {
        navigation.navigate("Login");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logo}>
                    <Image style={{ width: 150, height: 150, resizeMode: "contain" }} source={require("../../../assets/Logotipo.png")} />
                </View>
                <TouchableOpacity onPress={efetuarLogout} style={styles.btSair}><Ionicons name="exit-outline" size={22} color={"#fff"} /></TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.card}>
                    <View style={styles.cardInfo}>
                        <Text style={styles.cardTitle}>Fazer compras</Text>
                        <Text style={styles.cardDescription}>20/05/2023 - 17:30</Text>
                    </View>
                    <View style={styles.cardControl}>
                        <TouchableOpacity style={styles.btCard}><MaterialIcons name="delete" size={26} color={'#fff'}/></TouchableOpacity>
                        <TouchableOpacity style={styles.btCard}><MaterialIcons name="edit" size={26} color={'#fff'}/></TouchableOpacity>
                        <TouchableOpacity style={styles.btCard}><MaterialIcons name="crop-square" size={26} color={'#fff'}/></TouchableOpacity>
                    </View>
                </View>
            </View>
            <TouchableOpacity onPress={controlModal} style={styles.fabButton}>
                <Ionicons name="add" color={"#fff"} size={32} />
            </TouchableOpacity>
            <Modal visible={visibleModal} animationType="fade" transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.titleModal}>Adicionar Tarefa</Text>
                        <TextInput placeholder="Descrição" style={styles.inputModal}/>
                        <TextInput placeholder="Data" keyboardType="url" style={styles.inputModal}/>
                        <TextInput placeholder="Hora" style={styles.inputModal}/>
                        <View style={styles.modalButtons}>
                            <TouchableOpacity onPress={efetuarLogout} style={styles.btModal}><Text style={styles.textBtModal}>Salvar</Text></TouchableOpacity>
                            <TouchableOpacity onPress={controlModal} style={styles.btModal}><Text style={styles.textBtModal}>Cancelar</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navbar: {
        flex: .1,
        flexDirection: "row",
        width: '100%',
        paddingVertical: 40,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        marginLeft: 20
    },
    btSair: {
        width: 50,
        height: 50,
        backgroundColor: '#708066',
        marginRight: 20,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    content: {
        flex: .9,
        backgroundColor: '#d9d9d9',
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop:20
    },
    fabButton: {
        backgroundColor: '#c3062c',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 15,
        right: 15
    },
    modal: {
        margin: 0,
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,.8)',
        alignItems: "center",
        justifyContent: "center",
    },
    modalContent: {
        width: '90%',
        height: '70%',
        backgroundColor: '#d9d9d9',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        opacity: 1,

    },
    modalButtons:{
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleModal:{
        fontSize:32,
        fontWeight: "700",
        color: '#111',
        marginBottom:25
    },
    inputModal:{
        height:40,
        width: '90%', 
        backgroundColor: '#fff',
        paddingLeft: 25,
        fontSize: 18,
        borderRadius: 6,
        marginBottom:15
    },
    btModal:{
        alignItems: "center",
        justifyContent: "center",
        width:'45%',
        height: 40,
        backgroundColor: '#c3062c',
        borderRadius: 6
    },
    textBtModal:{
        fontSize:18,
        fontWeight: "700",
        color: '#fff'
    },
    card:{
        width: '90%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cardInfo:{
        borderRadius: 8,
        height: '100%',
        width: '60%',
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    cardControl:{
        borderRadius: 8,
        height: '100%',
        width:'40%',
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    cardTitle:{
        fontSize:18,
        fontWeight: "700",
        color: '#111',
        marginBottom:5
    },
    btCard:{
        width:40,
        height:40,
        borderRadius:6,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    }
});