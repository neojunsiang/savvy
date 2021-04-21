export const initialState = {
    allAccounts: [],
    allTransactions: [],
    loginUser: ""
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "UPON_USER_LOGIN":
            return {
              ...state,
              loginUser: action.user
            };
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
        case "READ_ALL_ACCOUNTS":
            return {
              ...state,
              allAccounts: action.accounts
            };
        case "READ_ALL_TRANSACTIONS":
            return {
                ...state,
                allTransactions: action.transactions
            };
        case "DELETE_A_TRANSACTION":
            let newTransactions = [...state.allTransactions];
            const index = newTransactions.findIndex(transaction => transaction.bankId === action.bankId && transaction._id === action.transactionId);
            if (index >= 0) {
                newTransactions.splice(index, 1);
            } else {
                console.log("Error in deleting transaction");
            }
            return {
                ...state,
                allTransactions: newTransactions
            };
        default:
            return state;
    }
}

export default reducer;