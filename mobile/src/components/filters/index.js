import { SafeAreaView, StyleSheet, Image, Text, View, TouchableOpacity, Modal, TextInput, Alert } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"

export default function FiltersTask({onAllTask, onTasksDone, onTasksUnDone}) {
    return (
        <View style={styles.controlFilters}>
            <TouchableOpacity style={styles.btFilter} onPress={onTasksDone}><Text style={styles.txtBtFilter}>Tarefas Realizadas</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btFilter} onPress={onTasksUnDone}><Text style={styles.txtBtFilter}>Tarefas à Fazer</Text></TouchableOpacity>
            <TouchableOpacity style={styles.btFilter} onPress={onAllTask}><Text style={styles.txtBtFilter}>Todas as Tarefas</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    controlFilters:{
        width:'100%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-evenly",
        height: 60,
    },
    btFilter:{
        width: 100,
        height: 50,
        borderRadius: 6,
        backgroundColor: '#FF194B',
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 2
    },
    txtBtFilter:{
        textAlign: "center",
        fontSize: 16,
        fontWeight: 700,
        color: '#fff'
    }
});


