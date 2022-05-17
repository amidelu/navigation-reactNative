import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoryScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeal: CategoryMealsScreen,
    MealDetails: MealDetailScreen
});