export const TOGGLE_PREFERENCES = 'TOGGLE_PREFERENCES';

export const togglePref = preferences =>{
    return {type: TOGGLE_PREFERENCES, updatedMealPrefs: preferences}
}