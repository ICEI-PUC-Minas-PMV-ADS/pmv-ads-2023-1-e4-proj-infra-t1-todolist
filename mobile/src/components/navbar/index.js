import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, Modal, TextInput, Alert } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import { deslogarSistema } from "../../services/authentication";

export default function NavBar() {
    const navigation = useNavigation();

    function efetuarLogout() {
        deslogarSistema();
        navigation.navigate("Login");
    }
    return (
        <View style={styles.navbar}>
            <View style={styles.logo}>
                <Image style={{ width: 150, height: 150, resizeMode: "contain" }} source={require("../../../assets/Logotipo.png")} />
            </View>
            <TouchableOpacity onPress={efetuarLogout} style={styles.btSair}><Ionicons name="exit-outline" size={22} color={"#fff"} /></TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
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
});


