import { setOption } from "./state.js";
import { renderContent } from "./UI.js";

const setupEvents = (state, updateState) => {
    const selectElement = document.getElementById("wall");

    selectElement.addEventListener("change", (event) => {
        const newState = setOption(state, event.target.value);
        updateState(newState);
        renderContent(newState.selectedOption);
    });
};

export { setupEvents };
