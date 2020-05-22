import { TOGGLE_PREFERENCES } from '../actions/mealPref';

const initialState = {
    mealPrefs: {
        vegetarian: false,
        vegan: false,
        glutenFree: false,
        dairyFree: false,
        healthy: false,
        cheap: false
    }
}

const mealPrefsReducer = (state=initialState, action) =>{
    switch(action.type) {
        case TOGGLE_PREFERENCES:
            const updatedMealPrefs = action.updatedMealPrefs
            return {mealPrefs: updatedMealPrefs}
        default:
            return state;
    }

}