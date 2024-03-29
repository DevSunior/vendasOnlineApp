import { Text, View } from "react-native";
import { ContainerLogin } from "../styles/login.style";
import Input from "../../../shared/components/input/Input";
import Button from "../../../shared/components/button/Button";

const Login = () => {

    const handleOnPress = () => {
        console.log('clickado')
    }

    return (
        <View>
            <ContainerLogin>
                <Input />
                <Button type="BUTTON_BOLD" title="ENTRAR" margin="15px" onPress={handleOnPress}/>
            </ContainerLogin>
        </View>
    )
}

export default Login;