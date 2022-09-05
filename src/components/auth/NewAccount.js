import { useContext, useState, useEffect } from 'react';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';
import axiosClient from '../../config/axios';
import authToken from '../../config/token';

const NewAccount = (props) => {

    //Extract values of context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, registerUser } = authContext;

    //If the user is authenticated
    useEffect(()=> {
        getRolList();

        if(message){
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history]);

    //State for Register User
    const [user, saveUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        canSaveMessages: false,
        roleList: ''
    });

    //Extract user
    const { email, password, firstName, lastName, role, canSaveMessages, confirmPassword, roleList } = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    //When the register user
    const onSubmit = e => {
        e.preventDefault();

        //Validate fileds voids
        if( email.trim() === '' || password.trim() === '' || firstName.trim() === '' || lastName.trim() === '' || confirmPassword.trim() === '' ){
            showAlert('All fields are required', 'alert-error');
            return;
        }

        //Password minimun 6 characters
        if( password.length < 6 ){
            showAlert('The Maximun length for the password are 6 characters','alert-error');
            return;
        }

        //Validate passwords fields to be equals
        if(password !== confirmPassword){
            showAlert('The password is diferrent to confirm password','alert-error');
            return;
        }

        //Send to action
        registerUser({
            firstName,
            lastName,
            email,
            password,
            role,
            canSaveMessages
        });
    }

    //Get roles of users
    const getRolList = async () => {
        const token = localStorage.getItem('token');

        try {
            const response = await axiosClient.get('/api/roles');
            
            if(message){
                showAlert(message.msg, message.category);
            }

            saveUser({
                ...user,
                roleList: response.data.roleList,
                role: response.data.roleList[0]._id
            });

        } catch (error) {
            console.log(error.response.data.msg);
        }
    }

    return(
        <main className="login_body">
            { alert ? (<div>{alert.msg}</div>) : null }
            <section className="center">
                <h1>New Account</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="txt_field">
                        <input
                            type="firstName"
                            required
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            value={firstName}
                            onChange={onChange}
                            />
                        <label>First Name</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="lastName"
                            required
                            id="lastName"
                            name="lastName"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={onChange}
                            />
                        <label>Last Name</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={onChange}
                            />
                        <label>E-mail</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="password"
                            required
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChange}
                            />
                        <label>Password</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="password"
                            required
                            id="confirmPassword"
                            name="confirmPassword"
                            placeholder="Repeat the Password"
                            value={confirmPassword}
                            onChange={onChange}
                            />
                        <label>Confirm Password</label>
                    </div>
                    <div className="txt_field">
                        <select id="role" name="role" onChange={onChange} defaultValue={role}>
                            {roleList.length === 0
                            
                                ? (<option key="vacio" value="">No se encontro ningún rol</option>)
                                : roleList.map(role => (
                                    (<option key={role._id} value={role._id}>{role.name}</option>)
                                ))
                            }
                        </select>
                        <label>Role</label>
                    </div>
                    <div className="txt_field">
                        <select id="canSaveMessages" name="canSaveMessages" onChange={onChange} defaultValue={canSaveMessages}>
                            <option value="false">Desactivado</option>
                            <option value="true">Activo</option>
                        </select>
                        <label>Save Chats</label>
                    </div>
                    <div className="submit">
                        <input
                            type="submit"
                            value="Register"
                        />
                    </div>
                </form>
            </section>
        </main>
    );
}

export default NewAccount;