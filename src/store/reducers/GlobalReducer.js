export const GlobalActions = {
    setRole: "SET_ROLES",
    setTheme: "SET_THEME",
    setLanguage: "SET_LANGUAGE",
    setUsers: "SET_USERS",
    addUser: "ADD_USER" 

}

// Initial State
const initialState = {
    roles: [],
    theme: "",
    language: "",
    users: []
};

export const globalReducer = (state = initialState, action) => {
    switch (action.type) {
        case GlobalActions.setRole:
            return {
                ...state,
                roles: action.payload
            };
            case GlobalActions.setUsers:
            return {
                ...state,
                users: action.payload
            };
        case GlobalActions.setCategories:
            return {
                ...state,
                categories: action.payload
            };
        case GlobalActions.setTheme:
            return {
                ...state,
                theme: action.payload
            };
        case GlobalActions.setLanguage:
            return {
                ...state,
                language: action.payload
            };
            case GlobalActions.addUser:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        default:
            return state;
    }
};