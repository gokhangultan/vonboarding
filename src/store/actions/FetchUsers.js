import Axios from 'axios';
import { GlobalActions } from '../reducers/GlobalReducer';

const axiosInstance = Axios.create({
    baseURL: "https://com"
});

// Thunk 
export const fetchUsers = () => async (dispatch, getState) => {
    try {
        const { users } = getState().global;
        if (users.length > 0) {
            return;
        }

        const response = await axiosInstance.get("/users");
        dispatch(setUsers(response.data));
    } catch (error) {
        console.error("Kullanıcıları Alamıyorum.", error);
    }
};

export const setUsers = (users) => ({
    type: GlobalActions.setUsers,
    payload: users
});