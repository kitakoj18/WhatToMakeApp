export const TOGGLE_PREFERENCES = 'TOGGLE_PREFERENCES';

export const togglePrefs = preferences =>{
    return {type: TOGGLE_PREFERENCES, updatedSelectedPrefs: preferences}
}