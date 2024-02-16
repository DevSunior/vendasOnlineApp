import { TouchableOpacityProps } from "react-native";
import { ContainerButton } from "./button.style";
import Text from "../text/Text";
import { theme } from "../../themes/theme";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
    margin?: string;
    type?: string;
}

const Button = ({title, margin, type, ...props}: ButtonProps) => {

    return (
        <ContainerButton margin={margin} {...props}>
            <Text type={type} color={theme.colors.neutralTheme.white}>{title}</Text>
        </ContainerButton>
    )

}

export default Button;