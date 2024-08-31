import { View, Text, StyleSheet } from "react-native";

function Subtitle({ children }) {
    return (
        <View style={ styles.headContainer }>
            <Text style={ styles.detailItemHead }>{ children }</Text>    
        </View>    
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    headContainer: {
        borderBottomColor: '#082408',
        borderBottomWidth: 2
    },
    detailItemHead: {
        color: '#082408',
        marginHorizontal: 4,
        fontSize: 18,
        padding: 6,
        fontWeight: 'bold',
        textAlign: 'center'
    },    
})