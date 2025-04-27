import { displaySettingsMap } from "./data.js";
import { timeSettingsMap } from "./data.js";

// STATE FUNCTION
const getSettings = (state, settingsMap, defaultValue) => {
    return settingsMap[state] || defaultValue;
}

// DISPLAY SETTINGS
const applyDisplaySettings = (settings, elements) => {
    elements.colorWall.style.display = settings.colorDisplay;
    elements.imageWall.style.display = settings.imageDisplay;
}

const updateWallDisplay = (event) => {
    const newState = event.target.value;
    const settings = getSettings(newState, displaySettingsMap, displaySettingsMap.default)
    applyDisplaySettings(settings, {colorWall, imageWall}); 
}

// selector
const selectElement = document.querySelector('#wall');  
const colorWall = document.querySelector('#color-wall');  
const imageWall = document.querySelector('#image-wall');  

selectElement.addEventListener('change', updateWallDisplay);

  
// TIME SETTINGS
const updateTimeSettings = (event, settingsMap, defaultValue) => {
    const newState = event ? event.target.value : undefined; 
    return getSettings(newState, settingsMap, defaultValue);
}

// Event handler 
const handleTimeChange = (event, settingsMap, defaultValue) => {
    const newSelectedTime = updateTimeSettings(event, settingsMap, defaultValue);
    console.log("New selected time:", newSelectedTime);
}

// Listeners
const selectTime = document.querySelector('#time');

window.addEventListener('load', () => {
    const defaultTime = updateTimeSettings(null, timeSettingsMap, 5);  
    console.log("Default selected time:", defaultTime);
});

selectTime.addEventListener('change', (event) => {
    handleTimeChange(event, timeSettingsMap, 5);  
});
  
