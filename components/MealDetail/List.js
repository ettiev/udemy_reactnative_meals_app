import { View, Text, StyleSheet } from "react-native";

function List({ outputArray }) {
    const listOputput = outputArray.map((item) => (
        <View key={item} style={ styles.itemContainer }>
            <Text  style={ styles.listItem }>{item}</Text>    
        </View>
    ))

    return (
        <View style={ styles.listBlock } >
            { listOputput }            
        </View>
    )
    
}

export default List;

const styles = StyleSheet.create({
    listBlock: {
        margin: 12,
    },
    itemContainer: {
        marginVertical: 3,
        borderRadius: 12,
        padding: 12,
        backgroundColor: '#d7f7d7'
    },
    listItem: {
        fontSize: 18
    }        
})