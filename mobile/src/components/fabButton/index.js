import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"


export default function FabButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.fabButton}>
            <Ionicons name="add" color={"#fff"} size={32} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    fabButton: {
        backgroundColor: '#FF194B',
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 15,
        right: 15
    },
});


