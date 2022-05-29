export const initialState = {
    term : 'abdsgvc',
};

export const actionTypes = {
    SET_SEARCH_TERM : "SET_SEARCH_TERM",
};

//state is state of data layer, action whatever we dispatch into data layer
const reducer = (state=initialState,action) => {
    console.log(action);

    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                //spread operator
                ...state,
                term: action.term,
            };
            default:
                return state;
    }
};

export default reducer;