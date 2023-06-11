import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"


export function Cadastro(){
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    

    function cancelarCadastro(){
        navigation.navigate("Login");
    };
    const efetuarCadastro = ()=>{
        if(senha !== confirmaSenha){
            Alert.alert('As senhas digitadas são diferentes.');
            return;
        }
        
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.logo}>
                <TouchableOpacity style={styles.buttonBack} onPress={cancelarCadastro}><Ionicons name="arrow-back-sharp" size={40} color="#fff" /></TouchableOpacity>
                <Image source={require("../../../assets/Logotipo.png")} />
            </View>
            <View style={styles.form}>
                <TextInput keyboardType="default" placeholder="Nome completo" style={styles.input} onChangeText={(text)=>{setNome(text)}} value={nome}/>
                <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.input} />
                <TextInput keyboardType="default" placeholder="Nascimento" style={styles.input} />
                <TextInput keyboardType="default" secureTextEntry={true} placeholder="Senha" style={styles.input} />
                <TextInput keyboardType="default" secureTextEntry={true} placeholder="Confirmar Senha" style={styles.input} />
                <TouchableOpacity style={styles.button} onPress={efetuarCadastro}><Text style={styles.buttonText}>Cadastrar</Text></TouchableOpacity>
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
        flex: .35,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBack:{
        position: "absolute",
        top: 20,
        left: 20
    },
    form: {
        width: '100%',
        flex: .65,
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