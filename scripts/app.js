import { displaySettingsMap } from "./data.js";
import { timeSettingsMap } from "./data.js";

// STATE FUNCTION
const getSettings = (state, defaultValue) => {
    return displaySettingsMap[state] || defaultValue;
}

// DISPLAY SETTINGS
const applyDisplaySettings = (settings, elements) => {
    elements.colorWall.style.display = settings.colorDisplay;
    elements.imageWall.style.display = settings.imageDisplay;
}

const updateWallDisplay = (event) => {
    const newState = event.target.value;
    const settings = getSettings(newState, displaySettingsMap.default)
    applyDisplaySettings(settings, {colorWall, imageWall});
}

const selectElement = document.querySelector('#wall');  
const colorWall = document.querySelector('#color-wall');  
const imageWall = document.querySelector('#image-wall');  

selectElement.addEventListener('change', updateWallDisplay);

// TIME SETTINGS
const applyTimeSettings = (settings) => settings;

const updateWallSettigns = (event) => {
    const newState = event.target.value;
    const settings = getSettings(newState, 0);
    applyTimeSettings(settings);
}

const selectTime = document.querySelector('time');
selectTime.addEventListener('change', updateWallSettigns);

// problems:
// state function isnt clear
// prpoblem with settings return