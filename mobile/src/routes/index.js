import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../pages/login";
import { Principal } from "../pages/principal"
import { Cadastro } from "../pages/cadastro"


const Stack = createNativeStackNavigator();

export function Routes() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{

                }}
            />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{

                }}
            />
            <Stack.Screen
                name="Principal"
                component={Principal}
                options={{

                }}
            />

        </Stack.Navigator>
    );
}