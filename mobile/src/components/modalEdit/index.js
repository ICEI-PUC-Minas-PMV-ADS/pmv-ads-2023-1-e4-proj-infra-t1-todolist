import { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, Alert } from "react-native";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons, Feather } from "@expo/vector-icons"
import { editTask } from "../../services/consumerApi";

export default function ModalEdit({ visible, onResquetClose, infos, token, userLogado }) {


    const [descricao, setDescricao] = useState();
    const [data, setData] = useState();
    const [hora, setHora] = useState();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };
    const handleDateConfirm = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split('T')[0];
        setData(formattedDate);
        hideDatePicker();
    };

    const handleTimeConfirm = (time) => {
        setSelectedTime(time);
        const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setHora(formattedTime);
        hideTimePicker();
    };

    const editarTarefa = async () => {
        const tarefaObj = {
            "id": infos.id,
            "title": descricao,
            "user": userLogado,
            "date": data + 'T' + hora
        }
        await editTask(token, tarefaObj)
            .then((response) => {
                Alert.alert('Tarefa editada com sucesso!');
                setDescricao('');
                setData('');
                setHora('');
                onResquetClose();
            }).catch((error) => {
                Alert.alert('Não foi possivel editar a tarefa!')
            })
    }

    useEffect(() => {
        if (visible) {
            setDescricao(infos.title);
            setData(infos.date.split("T")[0]);
            setHora(infos.date.split("T")[1].substring(0, 8));
        } else {
            setDescricao('');
            setData('');
            setHora('');
        }
    }, [visible])

    return (
        <Modal visible={visible} onRequestClose={onResquetClose} animationType="fade" transparent={true}>
            <View style={styles.modal}>
                <View style={styles.modalContent}>
                    <Text style={styles.titleModal}>Editar Tarefa</Text>
                    <TextInput placeholder="Descrição" style={styles.inputModal} onChangeText={(text) => setDescricao(text)} value={descricao} />
                    <View style={styles.inputDate}>
                        <TextInput placeholder="Data" style={styles.inputModal} value={data} editable={true} onPressIn={showDatePicker} />
                        <TouchableOpacity style={styles.iconInput} onPress={showDatePicker}><Ionicons name={'calendar'} color={'#111'} size={28} /></TouchableOpacity>
                    </View>
                    <View style={styles.inputDate}>
                        <TextInput placeholder="Hora" style={styles.inputModal} value={hora} editable={true} onPressIn={showDatePicker} />
                        <TouchableOpacity style={styles.iconInput} onPress={showTimePicker}><Feather name={'watch'} color={'#111'} size={28} /></TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleDateConfirm}
                        onCancel={hideDatePicker}
                    />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleTimeConfirm}
                        onCancel={hideTimePicker}
                    />

                    <View style={styles.modalButtons}>
                        <TouchableOpacity onPress={() => {
                            setDescricao('');
                            setData('');
                            setHora('');
                            onResquetClose();
                        }
                        } style={styles.btModal}><Text style={styles.textBtModal}>Cancelar</Text></TouchableOpacity>
                        <TouchableOpacity onPress={editarTarefa} style={styles.btModal}><Text style={styles.textBtModal}>Salvar</Text></TouchableOpacity>

                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
    modalButtons: {
        width: '90%',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    titleModal: {
        fontSize: 32,
        fontWeight: "700",
        color: '#111',
        marginBottom: 25
    },
    inputDate: {
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
    btModal: {
        alignItems: "center",
        justifyContent: "center",
        width: '45%',
        height: 40,
        backgroundColor: '#c3062c',
        borderRadius: 6
    },
    textBtModal: {
        fontSize: 18,
        fontWeight: "700",
        color: '#fff'
    },
});


