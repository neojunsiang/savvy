export const initialState = {
    allAccounts: [],
    allTransactions: []
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "CREATE_AN_ACCOUNT":
            return {
                ...state,
                allAccounts: [...state.allAccounts, action.account]
            };

        case "CREATE_A_TRANSACTION":
            return {
                ...state,
                allTransactions: [...state.allTransactions, action.transaction]
            };

        default:
            return state;
    }
}

export default reducer;