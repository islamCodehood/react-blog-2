//1. deposit
//2. withdraw

export const depositAmount = (amount) => {
    //action
    return {
        type: "DEPOSIT",
        payload: amount //number
    }
}

export const withdrawAmount = (amount) => {
    //action
    return {
        type: "WITHDRAW",
        payload: amount
    }
}