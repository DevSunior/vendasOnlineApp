import styled from "styled-components/native";

interface ContainerInputProps {
    margin?: string;
}

export const ContainerInput = styled.TextInput<ContainerInputProps>`
    width: 100%;
    height: 50px;
    padding: 16px;
    background-color: white;
    color: #888;
    ${(props: ContainerInputProps) => (props.margin ? `margin: ${props.margin};` : '')}
    border-radius: 5px;
`