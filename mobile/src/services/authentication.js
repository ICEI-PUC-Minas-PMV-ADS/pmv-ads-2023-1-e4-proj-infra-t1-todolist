import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, } from '@firebase/auth'
import { Alert } from 'react-native'
import { deleteCookie, setCookieWithExpiration } from './cookie';

async function logarSistema(email, senha) {
    const  auth = await getAuth();
    return new Promise( (resolve, reject) => {
        if (email !== '' && senha !== '') {
            signInWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    //nesse ponto eu devo salvar o id do usuario como cookie para manter a sessao.
                    auth.currentUser.getIdToken()
                    .then((token)=>{
                        setCookieWithExpiration('jwtToken', token, 60 );
                        setCookieWithExpiration('usuarioLogado', userCredential.user.uid, 60 );
                        resolve(true)
                    }).catch((error)=>{console.log('Erro ao recuperar o token'+error)});
                })
                .catch((error) => {
                    //Aqui eu faço o tratamento do erro
                    console.log('Erro no login:' +error)
                    reject(false)
                })
        } else {
            Alert.alert('Verifique os campos e-mail e senha!')
            return;
        }
    })

}

async function deslogarSistema(){
    const auth = getAuth();
    try {
        deleteCookie('jwtToken');
        deleteCookie('usuarioLogado');
        signOut(auth);
    } catch (error) {
        console.log('Não foi possivel sair do sistema!'+ error)
    }
}

async function cadastrarUsuario(email, senha){
    const auth = getAuth();
    return new Promise((resolve, reject)=>{
        createUserWithEmailAndPassword(auth, email, senha)
        .then((response)=>{
            resolve(true);
        })
        .catch((error)=>{
            console.log(error)
            reject(false);
        })
    })
    
}

export { logarSistema, deslogarSistema, cadastrarUsuario }
