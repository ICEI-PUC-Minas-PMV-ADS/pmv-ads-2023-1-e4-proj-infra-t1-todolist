import { useNavigation } from "@react-navigation/native";
import { SafeAreaView, StyleSheet, TouchableOpacity, Text } from "react-native";


export function Form(){
    const navigation = useNavigation();

    return(
        <SafeAreaView style={StyleSheet.container}>
            <TouchableOpacity onPress={efetuarLogin}><Text></Text></TouchableOpacity>
        </SafeAreaView>
    );
}