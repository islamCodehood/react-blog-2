const initialValue = 10;

const reducer = (state = initialValue, action) => {
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload
        case "WITHDRAW":
            return state - action.payload
        default:
            return state
    }
}

export default reducer;