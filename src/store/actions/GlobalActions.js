import { GlobalActions } from "../reducers/GlobalReducer";

export const toggleDarkMode = () => {
    return { type: GlobalActions.toggleDarkMode };
  };