import { displaySettingsMap } from "./data.js";

const getDisplaySettings = (state) => {
    return displaySettingsMap[state] || displaySettingsMap.default;
}
 
const applyDisplaySettings = (settings, elements) => {
    elements.colorWall.style.display = settings.colorDisplay;
    elements.imageWall.style.display = settings.imageDisplay;
}

const updateWallDisplay = (event) => {
    const newState = event.target.value;
    const settings = getDisplaySettings(newState)
    applyDisplaySettings(settings, {colorWall, imageWall});
}

const selectElement = document.querySelector('#wall');  
const colorWall = document.querySelector('#color-wall');  
const imageWall = document.querySelector('#image-wall');  

selectElement.addEventListener('change', updateWallDisplay);
