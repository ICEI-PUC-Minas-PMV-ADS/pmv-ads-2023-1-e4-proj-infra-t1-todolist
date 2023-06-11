//imports de navegação
import { useNavigation } from "@react-navigation/native";
//imports do react
import { SafeAreaView, StyleSheet, View, Text, Image, ActivityIndicator, FlatList } from "react-native";
import { useEffect, useState } from "react";
//Deve ser importado aqui para que o firebase seja inicializado.
import Firebase from "../../services/firebaseConfig";
//imports de components custom e funções
import { getCookieWithExpiration } from "../../services/cookie";
import {  getAll, getTasksDone, getTasksUndone } from "../../services/consumerApi";
import NavBar from "../../components/navbar";
import FabButton from "../../components/fabButton";
import ModalTask from "../../components/modalTask";
import Cards from "../../components/cards"
import ModalEdit from "../../components/modalEdit";
import FiltersTask from "../../components/filters";

export function Principal() {
    const [infosEdit, setInfosEdit] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [carregamento, setCarregamento] = useState(true);
    const [visibleModal, setVisibleModal] = useState(false);
    const [visibleModalEdit, setVisibleModalEdit] = useState(false);
    const [tarefas, setTarefas] = useState(null);
    const [token, setToken] = useState(null);
    const [userLogged, setUserLogged] = useState(null);

    const carregamentoInicial = async () => {
        const req1 = await getCookieWithExpiration('jwtToken')
            .then((response) => {
                setToken(response);
                getCookieWithExpiration('usuarioLogado')
                    .then((response) => {
                        setUserLogged(response);
                    })
                getAll(response)
                    .then((response) => {
                        setTarefas(response);
                        setCarregamento(false);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            });
    }

    const carregaDados = async (token) => {
        await getAll(token)
            .then((response) => {
                setTarefas(response);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const carregaTasksDone = async (token) => {
        await getTasksDone(token)
            .then((response) => {
                setTarefas(response);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };
    const carregaTasksUnDone = async (token) => {
        await getTasksUndone(token)
            .then((response) => {
                setTarefas(response);
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        carregamentoInicial();
    }, []);
    useEffect(()=>{
        carregaDados(token);
    },[isLoading])

    const renderItem = ({ item }) => {

        return (
            <Cards
                item={item}
                token={token}
                user={userLogged}
                onDelete={() => {
                    setIsLoading(true)
                }}
                onEdit={() => {
                    setInfosEdit(item)
                    setVisibleModalEdit(true);
                }}
                onChangeDone={()=>{
                    setIsLoading(true);
                }}
            />
        )
    }

    if (carregamento) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="blue" />
                <Text>Carregando</Text>
            </View>
        )
    } else {
        return (
            <SafeAreaView style={styles.container}>
                <NavBar />
                <FiltersTask
                    onTasksDone={()=>{carregaTasksDone(token)}}
                    onTasksUnDone={()=>{carregaTasksUnDone(token)}}
                    onAllTask={()=>{carregaDados(token)}}
                />
                <View style={styles.content}>
                    <FlatList
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id}
                        data={tarefas}
                    />
                </View>
                <ModalTask
                    visible={visibleModal}
                    onResquetClose={() => {
                        setVisibleModal(false);
                        setIsLoading(true)
                    }}
                    userLogado={userLogged}
                    token={token}
                />
                <ModalEdit
                    visible={visibleModalEdit}
                    onResquetClose={() => {
                        setVisibleModalEdit(false);
                        setIsLoading(true);
                    }}
                    userLogado={userLogged}
                    token={token}
                    infos={infosEdit}
                />
                <FabButton onPress={() => { setVisibleModal(true) }} />

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        backgroundColor: '#d9d9d9',
    },

    content: {
        flex: .9,
        width: '90%',
        backgroundColor: '#d9d9d9',
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: 20
    },



});