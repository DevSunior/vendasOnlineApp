import styled from "styled-components/native";

interface ContainerTextProps {
    color?: string;
    size: string;
    family: string;
}

export const ContainerText = styled.Text<ContainerTextProps>`
    ${(props: ContainerTextProps) => (props.color ? `color: ${props.color};` : '')};

    font-family:  ${(props: ContainerTextProps) => (props.family)};
    font-size: ${(props: ContainerTextProps) => (props.size)};
`