import { TOGGLE_PREFERENCES } from '../actions/mealPref';

const initialState = {
    selectedPrefs: {
        selectedVegetarian: false,
        selectedVegan: false,
        selectedGlutenFree: false,
        selectedDairyFree: false,
        selectedHealthy: false,
        selectedCheap: false
    }
}

const mealPrefsReducer = (state=initialState, action) =>{
    switch(action.type) {
        case TOGGLE_PREFERENCES:
            const updatedSelectedPrefs = action.updatedSelectedPrefs
            return {selectedPrefs: updatedSelectedPrefs}
        default:
            return state;
    }

}

export default mealPrefsReducer;