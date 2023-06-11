import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"
import { deleteTask, markAsDone, markAsUndone } from "../../services/consumerApi";
export default function Cards({ item, token, user, onDelete, onEdit, onChangeDone }) {

    const id = item.id;
    const tokenReq = token;
    const userReq = user;
    const deletarTarefa = async () => {
        onDelete();
        await deleteTask(tokenReq, userReq, id);
    }
    const marcarFeito = async () => {
        if (item.done) {
            onChangeDone();
            await markAsUndone(tokenReq, userReq, id);
        } else {
            onChangeDone();
            await markAsDone(tokenReq, userReq, id);
        }
    }
    if (item.done) {
        return (
            <View style={[styles.card, styles.done]}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>
                        {item.date}
                    </Text>
                </View>
                <View style={styles.cardControl}>
                    <TouchableOpacity style={styles.btCard} onPress={deletarTarefa} ><MaterialIcons name="delete" size={26} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity style={styles.btCard} onPress={() => { onEdit(item) }}><MaterialIcons name="edit" size={26} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity style={styles.btCard} onPress={marcarFeito}><MaterialIcons name="done" size={26} color={'#fff'} /></TouchableOpacity>
                </View>
            </View>
        );
    } else {
        return (
            <View style={[styles.card, styles.undone]}>
                <View style={styles.cardInfo}>
                    <Text style={styles.cardTitle}>{item.title}</Text>
                    <Text style={styles.cardDescription}>
                        {item.date}
                    </Text>
                </View>
                <View style={styles.cardControl}>
                    <TouchableOpacity style={styles.btCard} onPress={deletarTarefa} ><MaterialIcons name="delete" size={26} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity style={styles.btCard} onPress={() => { onEdit(item) }}><MaterialIcons name="edit" size={26} color={'#fff'} /></TouchableOpacity>
                    <TouchableOpacity style={styles.btCard} onPress={marcarFeito}><MaterialIcons name="crop-square" size={26} color={'#fff'} /></TouchableOpacity>
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    done: {
        borderColor: 'green',
        borderWidth: 5,
    },
    undone: {
        borderColor: 'red',
        borderWidth: 5,
    },
    card: {
        width: '100%',
        height: 150,
        backgroundColor: '#fff',
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    cardInfo: {
        borderRadius: 8,
        height: '100%',
        width: '60%',
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "center",
    },
    cardControl: {
        borderRadius: 8,
        height: '100%',
        width: '40%',
        flexDirection: "row",
        backgroundColor: '#fff',
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "700",
        color: '#111',
        marginBottom: 5
    },
    btCard: {
        width: 40,
        height: 40,
        borderRadius: 6,
        backgroundColor: '#FF194B',
        alignItems: "center",
        justifyContent: "center",
    }
});


