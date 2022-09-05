import { Children, useReducer, useEffect } from "react";
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
        message: null,
        loading: true
    }

    const [ state, dispatch ] = useReducer(AuthReducer, initialState);

    /* useEffect(() => {
        //Get user
        userAuthenticated();
    },[]); */

    //Functions
    const registerUser = async data => {

        try {
            const response = await axiosClient.post('/api/users', data);
            dispatch({
                type: SUCCESSFUL_REGISTER,
                payload: response.data
            })
        } catch (error) {
            console.log(error.response.data.msg);

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
        
        if(!token){
            return
        }
        authToken(token);

        try {
            const response = await axiosClient.get('/api/auth');
            
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
            
            const tokenCraeted = response.data.token;

            /* new Promise( async (resolve, reject) => {
                console.log("Entró promise");
                await dispatch({
                    type: SUCCESSFUL_LOGIN,
                    payload: response.data.token
                });
                await resolve();
            })
            .then(() => {
                console.log("Entró then");
                //Get user
                userAuthenticated();
            })
            .catch(() => {
                console.log("Problemas con el token.")
            }) */

            dispatch({
                type: SUCCESSFUL_LOGIN,
                payload: response.data.token
            }); 

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

    //Close Use session
    const logout = () => {
        dispatch({
            type: LOG_OUT
        })
    }

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                authenticated: state.authenticated,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                login,
                userAuthenticated,
                logout
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
 }

 export default AuthState;