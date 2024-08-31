import { useLayoutEffect } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';

function MealDetailsScreen({ navigation, route }) {
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId)

    useLayoutEffect(() => {
        const mealTitle = meal.title;
        navigation.setOptions({
            title: mealTitle
        })
    }, [mealId, navigation]);

    return (
        <MealDetail 
            id= {meal.id}
            categoryIds= {meal.categoryIds}
            title= {meal.title}
            affordability= {meal.affordability}
            complexity= {meal.complexity}
            imageUrl= {meal.imageUrl}
            duration= {meal.duration}
            ingredients= {meal.ingredients}
            steps= {meal.steps}
            isGlutenFree= {meal.isGlutenFree}
            isVegan= {meal.isVegan}
            isVegetarian= {meal.isVegetarian}
            isLactoseFree= {meal.isLactoseFree}
        />
    )
}

export default MealDetailsScreen;
