import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text, View, Image, TextInput, Alert, Keyboard } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"
import { cadastrarUsuario } from "../../services/authentication";
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export function Cadastro() {
    const navigation = useNavigation();
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [data, setData] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [keyboardIsOpen, setKeyboardIsOpen] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split('T')[0];
        setData(formattedDate);
        setNascimento(formattedDate);
        hideDatePicker();
    };
    function validaEmail(texto) {
        const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        return regex.test(texto);
    }

    function validaNascimento(texto) {
        const regex = /^(19\d{2}|20\d{2})-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
        return regex.test(texto);
    }

    function validaSenha(texto) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return regex.test(texto);
    }
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            handleKeyboardDidShow
        );
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            handleKeyboardDidHide
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);
    const handleKeyboardDidShow = () => {
        setKeyboardIsOpen(true);
    };

    const handleKeyboardDidHide = () => {
        setKeyboardIsOpen(false);
    };

    function cancelarCadastro() {
        navigation.navigate("Login");
    };
    const efetuarCadastro = () => {
        if (validaEmail(email)) {
            if (validaNascimento(nascimento)) {
                if (validaSenha(senha)) {
                    if (senha !== confirmaSenha) {
                        Alert.alert('As senhas digitadas são diferentes.');
                        return;
                    } else {
                        cadastrarUsuario(email, senha)
                            .then(() => {
                                Alert.alert('Usuario cadastrado com sucesso');
                                navigation.navigate('Login')
                            })
                            .catch((error) => {
                                Alert.alert('Erro interno ao efetuar o cadastro!')
                                console.log(console.log(error));

                            })
                    }
                } else {
                    Alert.alert('A senha deve ter no minimo 6 caracteres, 1 caracter especiaç, 1 Letra maiscula e 1 minuscula!')
                }
            } else {
                Alert.alert('Digite uma data de nascimento no formato dd/mm/YYYY!')
            }
        } else {
            Alert.alert('Digite um e-mail válido!')
        }



    }

    return (
        <SafeAreaView style={styles.container}>
            {/* Seu conteúdo aqui */
                <View style={styles.logo}>
                    <TouchableOpacity style={styles.buttonBack} onPress={cancelarCadastro}><Ionicons name="arrow-back-sharp" size={40} color="#fff" /></TouchableOpacity>
                    <Image style={{ width: 250, height: 250, resizeMode: "contain" }} source={require("../../../assets/Logotipo.png")} />
                </View>
            }
            {keyboardIsOpen && (
                <View style={{ height: 60 }}>
                    {/* Componente ou espaço reservado para o tamanho do teclado */}
                </View>
            )}

            <View style={styles.form}>
                <TextInput keyboardType="default" placeholder="Nome completo" style={styles.input} onChangeText={(text) => { setNome(text) }} value={nome} />
                <TextInput keyboardType="email-address" placeholder="E-mail" style={styles.input} onChangeText={(text) => { setEmail(text) }} value={email} />
                <View style={styles.inputDate}>
                    <TextInput placeholder="Data" style={styles.inputModal} value={data} editable={true} onPressIn={showDatePicker} />
                    <TouchableOpacity style={styles.iconInput} onPress={showDatePicker}><Ionicons name={'calendar'} color={'#111'} size={28} /></TouchableOpacity>
                </View>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateConfirm}
                    onCancel={hideDatePicker}
                />
                <TextInput keyboardType="default" secureTextEntry={true} placeholder="Senha" style={styles.input} onChangeText={(text) => { setSenha(text) }} value={senha} />
                <TextInput keyboardType="default" secureTextEntry={true} placeholder="Confirmar Senha" style={styles.input} onChangeText={(text) => { setConfirmaSenha(text) }} value={confirmaSenha} />
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
        paddingTop: 60,
        paddingHorizontal: 15,
        paddingBottom: 10
    },
    logo: {
        width: '100%',
        flex: .35,
        backgroundColor: '#c3062c',
        alignItems: "center",
        justifyContent: "center",
    },
    buttonBack: {
        position: "absolute",
        top: 20,
        left: 20
    },inputDate: {
        flexDirection: "row",

    },
    inputModal: {
        height: 40,
        width: '90%',
        backgroundColor: '#fff',
        paddingLeft: 25,
        fontSize: 18,
        borderRadius: 6,
        marginBottom: 15
    },
    iconInput: {
        position: "absolute",
        right: 0,
        top: 0,
        width: '90%',
        height: 40,
        alignItems: "flex-end",
        justifyContent: "center",
        fontSize: 28,
        paddingRight: 10
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
        marginBottom: 25

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