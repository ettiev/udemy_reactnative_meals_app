import { useLayoutEffect } from 'react';  //useContext for React Context
import { useDispatch, useSelector } from 'react-redux';

import { MEALS } from '../data/dummy-data';
import MealDetail from '../components/MealDetail';
import IconButton from '../components/IconButton';
//import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite } from '../store/redux/favorites';


function MealDetailsScreen({ navigation, route }) {
    //const favoriteMealsCtx = useContext( FavoritesContext )
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch()
    
    const mealId = route.params.mealId;
    const meal = MEALS.find((meal) => meal.id === mealId)

    const mealIsFav = favoriteMealIds.includes(mealId)

    function changeFavoriteStatusHandler() {
        if (mealIsFav) {
            //favoriteMealsCtx.removeFavorite(mealId);
            dispatch(removeFavorite({ id:mealId }));
        } else {
            //favoriteMealsCtx.addFavorite(mealId);
            dispatch(addFavorite({ id:mealId }));
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
