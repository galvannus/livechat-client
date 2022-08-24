import { Children, useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from './authReducer';
import axiosClient from '../../config/axios';
import authToken from '../../config/token';

import { 
    SUCCESSFUL_REGISTER,
    REGISTER_ERROR,
    GET_USER,
    SUCCESSFUL_LOGIN,
    LOGIN_ERROR,
    LOG_OUT
 } from "../../types";

 const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        authenticated: null,
        user: null,
        message: null
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    //Functions
    const registerUser = async data => {

        try {
            const response = await axiosClient.post('/api/users', data);
            console.log(response);
            /*dispatch({
                type: SUCCESSFUL_REGISTER,
                payload: response.data
            })*/
        } catch (error) {
            //console.log(error.response.data.msg);

            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }

    //return user authenticated
    const userAuthenticated = async () => {
        const token = localStorage.getItem('token');
        if(token){
            authToken(token);
        }

        try {
            const response = await axiosClient.get('/api/auth');
            console.log(response);

            dispatch({
                type: GET_USER,
                payload: response.data.user
            }); 

        } catch (error) {
            console.log(error.response.data);

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    //When user login
    const login = async data => {
        try {
            const response = await axiosClient.post('/api/auth', data);
            console.log(response.data);
            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: response.data
            });

            //Get user
            userAuthenticated();

        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alert-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            });
        }
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                registerUser,
                login
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
 }

 export default AuthState;