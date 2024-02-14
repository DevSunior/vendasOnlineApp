import styled from "styled-components/native";

interface ButtonContainerProps {
    margin?: string;
}

export const ContainerButton = styled.TouchableOpacity<ButtonContainerProps>`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    ${(props: ButtonContainerProps) => (props.margin ? `margin: ${props.margin};` : '')}
    background-color: blue;
`;