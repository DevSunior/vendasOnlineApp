import { SafeAreaView, StyleSheet, Text } from "react-native";
import styled from "styled-components/native";

// Exemplo de declaração styled components
const TextNew = styled.Text`
    color: aqua;
`

const App = () => {

    return (
        <SafeAreaView>
            <Text style={styles.container}>Testando</Text>
            <TextNew>NOVO TESTE</TextNew>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        color: 'blue'
    }
})

export default App;