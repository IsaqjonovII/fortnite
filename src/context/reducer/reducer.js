export const initialState = {
    count: 100,
    theme: false,
    users: []
}


const reducer = (state, action) => {
    switch(action.type) {
        case "INC" :
            return {
                ...state,
                count: state.count + (action.payload ? action.payload : 1)
            }
        case "DEC" :
            return {
                ...state,
                count: state.count - 1
            }
        case "CHANGE_THEME" : 
            return {
                ...state,
                    theme: !state.theme
            }
            case "ADD_USER" : 
             return {
                ...state, 
                users: [...state.users, action.payload]
             }
        case "REMOVE_USER": 
             return {
                ...state,
                users: state.users.slice(0, -1)
             }
        default : 
            return state
    }
}

export default reducer;