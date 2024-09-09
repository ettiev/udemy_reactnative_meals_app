import { useLayoutEffect, useContext } from 'react';

import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import IconButton from '../components/IconButton';
import { FavoritesContext } from '../store/context/favorites-context';

function MealDetailsScreen({ navigation, route }) {
    const favoriteMealsCtx = useContext( FavoritesContext )
    
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFav = favoriteMealsCtx.ids.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFav) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        const mealTitle = meal.title;
        navigation.setOptions({
            title: mealTitle,
            headerRight: () => {
                return (<IconButton 
                    onPress={ changeFavoriteStatusHandler }
                    icon={ mealIsFav ? 'star' : 'star-outline' }
                    color={ 'white' }    
                />)
            }
        })
    }, [mealId, navigation, changeFavoriteStatusHandler]);

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
