import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert } from "react-native";
import { useState } from "react";

export function Login() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
     function efetuarLogin(email, senha) {
     
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <Image source={require("../../../assets/Logotipo.png")} />
            </View>
            <View style={styles.form}>
                <TextInput keyboardType="default" placeholder="E-mail" style={styles.input} value={email} onChangeText={(text)=>{setEmail(text)}} />
                <TextInput keyboardType="default" secureTextEntry={true} placeholder="Senha" style={styles.input } value={senha} onChangeText={(text)=>{setSenha(text)}} />
                <TouchableOpacity style={styles.button} onPress={efetuarLogin(email,senha)}><Text style={styles.buttonText}>Login</Text></TouchableOpacity>
                <Text style={styles.textCadastro}>Ainda não sou cadastrado!  <Text onPress={() => navigation.navigate("Cadastro")} style={styles.textBtCadastrar}>Criar conta.</Text></Text>
            </View>
            
            <View style={styles.logo}>
                <Image style={{ width: 250, height: 250, resizeMode: "contain" }} source={require("../../../assets/calendar.png")} />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#c3062c',
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40,
        paddingHorizontal: 15,
        paddingBottom: 40
    },
    logo: {
        width: '100%',
        flex: .25,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    },
    form: {
        width: '100%',
        flex: .50,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    },
    art: {
        width: '100%',
        flex: .25,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        backgroundColor: '#e4e3db',
        color: '#45483c',
        width: '90%',
        height: 45,
        borderRadius: 6,
        paddingLeft: 14,
        fontSize: 18,
        marginBottom: 30

    },
    button: {
        backgroundColor: '#708066',
        height: 45,
        width: "90%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        marginBottom: 30

    },
    buttonText: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold"
    },
    textCadastro: {
        fontSize: 16,
        color: '#fff',
        fontWeight: "700",
        height: 30,
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "row",
        width: '90%',
    },
    textBtCadastrar: {
        marginLeft: 10,
        color: '#3c3c3c'
    }
})