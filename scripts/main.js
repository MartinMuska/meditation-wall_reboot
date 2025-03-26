import { initialState } from "./state.js";
import { renderContent } from "./UI.js";
import { setupEvents } from "./events.js";

let state = initialState;

const updateState = (newState) => {
    state = newState;
};

document.addEventListener("DOMContentLoaded", () => {
    setupEvents(state, updateState);
    renderContent(state.selectedOption);
});
