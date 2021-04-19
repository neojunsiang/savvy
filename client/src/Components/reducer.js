export const initialState = {
  allAccounts: []
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "CREATE_AN_ACCOUNT":
            return {
                ...state,
                allAccounts: [...state.allAccounts, action.account]
            };
    
        default:
            return state;
    }
}

export default reducer;