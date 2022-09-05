import { 
    SUCCESSFUL_REGISTER,
    REGISTER_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    LOG_OUT
 } from "../../types";

// eslint-disable-next-line
export default ( state, action ) => {
    switch (action.type) {
        case SUCCESSFUL_REGISTER:
            return {
                ...state,
                //authenticated: true,
                message: null
            }
        case SUCCESSFUL_LOGIN:
            localStorage.setItem('token', action.payload);
            return {
                ...state,
                authenticated: true,
                message: null,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                authenticated: true,
                user: action.payload,
                loading: false
            }
        case LOG_OUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                authenticated: null,
                message: action.payload,
                loading: false
            }
            

        default:
            return state;
    }
}