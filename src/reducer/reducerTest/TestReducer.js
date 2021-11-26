import {
    NEW_USER,
    EDIT_USER,
    DELETE_USER
} from '../reducerTypes/types';

export default function TestReducer(state, action){
    switch(action.type){
        case NEW_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };

        case EDIT_USER:
            const editUserData = action.payload;
            const editUserList = state.users.map(
                el => el.id === editUserData.id ? editUserData : el
            );

            return {
                ...state,
                users: editUserList,
            };

        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(
                    el => el.id !== action.payload
                )
            };

        default:
            return state;
    };
};