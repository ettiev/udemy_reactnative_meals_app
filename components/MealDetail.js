import { ScrollView, View, Text, Image, StyleSheet, Platform } from 'react-native';

import Subtitle from './MealDetail/Subtitle';
import List from './MealDetail/List';

function MealDetail({ id, categoryIds, title, affordability, complexity, imageUrl, duration, ingredients, steps,
    isGlutenFree, isVegan, isVegetarian, isLactoseFree}) {
    
    return(
        <ScrollView>
            <View style={ styles.mealItem }> 
                <View style={ styles.innerContainer }>
                    <View>
                        <Image style={ styles.image } source={{ uri: imageUrl }}/>
                        <Text style={ styles.title }>{ title }</Text>
                    </View>
                    <View style={ styles.details }>
                        <Subtitle>Basic Information:</Subtitle>
                        <Text style={ styles.detailItem }>Duration: { duration } minutes</Text>
                        <Text style={ styles.detailItem }>Complexity: { complexity }</Text>
                        <Text style={ styles.detailItem }>Affordability: { affordability }</Text>
                        <Subtitle>Ingredients:</Subtitle>
                        <List outputArray={ ingredients }/>
                        <Subtitle>Steps:</Subtitle>
                        <List outputArray={ steps } />
                        <Subtitle>Allergies and Restrictions:</Subtitle>
                        <Text style={ styles.detailItem }>Gluten Free: { isGlutenFree ? 'Yes' : 'No' }</Text>
                        <Text style={ styles.detailItem }>Vegan: { isVegan ? 'Yes' : 'No' }</Text>
                        <Text style={ styles.detailItem }>Vegetarian: { isVegetarian ? 'Yes' : 'No' }</Text>
                        <Text style={ styles.detailItem }>Lactose Free: { isLactoseFree ? 'Yes' : 'No' }</Text>
                    </View>
                </View> 
            </View>
        </ScrollView> 
    )
}

export default MealDetail;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
        backgroundColor: 'white', 
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        color: '#082408',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
        margin: 8,
    }, 
    details: {
        padding: 18
    },
    detailItem: {
        margin: 4,
        fontSize: 18,
        padding: 6
    }
});