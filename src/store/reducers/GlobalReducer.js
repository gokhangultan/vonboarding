export const GlobalActions = {
    setRole: "SET_ROLES",
    setTheme: "SET_THEME",
    setLanguage: "SET_LANGUAGE",
    toggleDarkMode: "DARK_MODE",
    setUsers: "SET_USERS",
    addUser: "ADD_USER" 

}

const localTheme = localStorage.getItem("darkMode");

// Initial State
const initialState = {
    roles: [],
    theme: "",
    language: "",
    users: [],
    darkMode: localTheme !== null ? JSON.parse(localTheme) : false
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
            case GlobalActions.toggleDarkMode:
                return {
                  ...state,
                  darkMode: !state.darkMode,
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