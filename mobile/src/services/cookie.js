import AsyncStorage from '@react-native-async-storage/async-storage';

const setCookieWithExpiration = async (key, value, expirationMinutes)=>{
    const expirationMs= 60*1000* expirationMinutes;
    const expirationDate = new Date().getTime()+expirationMs;
    const data = {
        value,
        expirationDate
    }
    await AsyncStorage.setItem(key, JSON.stringify(data));
    //funçao que remove o cookie após o tempo de expiração;
    setTimeout(() => {
        deleteCookie(key);
    }, expirationMs);
}

const getCookieWithExpiration = async (key)=>{
    const dataString = await AsyncStorage.getItem(key);
    if(dataString!==''){
        const data = JSON.parse(dataString);
        const horaAtual = new Date().getTime();
        if(horaAtual<data.expirationDate){
            return data.value;
        }else{
            deleteCookie(key);
        }
    }

}
const deleteCookie = async (key)=>{
    await AsyncStorage.removeItem(key);
}


export  {setCookieWithExpiration, getCookieWithExpiration, deleteCookie};