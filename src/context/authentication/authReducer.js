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
            //localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                //authenticated: true,
                message: null
            }
        case SUCCESSFUL_LOGIN:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                authenticated: true,
                message: null
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                message: action.payload
            }
            

        default:
            return state;
    }
}