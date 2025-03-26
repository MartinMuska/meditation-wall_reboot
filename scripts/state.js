const initialState = { selectedOption: "default" };

const setOption = (state, option) => ({ ...state, selectedOption: option });

export { initialState, setOption };
