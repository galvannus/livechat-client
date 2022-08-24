import { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alerts/alertContext';
import AuthContext from '../../context/authentication/authContext';

const Login = (props) => {

    //Extract values of context
    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { message, authenticated, login } = authContext;

    //If the user doesn't exist
    useEffect(()=> {
        /* if(authenticated){
            props.history.push('/chats');
        } */

        if(message){
            showAlert(message.msg, message.category);
        }
    }, [message, authenticated, props.history]);

    //State for login
    const [user, saveUser] = useState({
        email: '',
        password: ''
    });

    //Extract user
    const { email, password } = user;


    const onChange = e => {
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    //When the user login
    const onSubmit = e => {
        e.preventDefault();

        //Validate fileds voids
        if(email.trim() === '' || password.trim() === ''){
            showAlert('All fields are required.', 'alerta-error');
        }

        //Send to action
        login({ email, password });
    }
    
    return(
        <main className="login_body">
            { alert ? (<div>{alert.msg}</div>) : null }
            <section className="center">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="txt_field">
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                            />
                        <label>E-mail</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                            />
                        <label>Password</label>
                    </div>
                    <div className="submit">
                        <input
                            type="submit"
                            value="Login"
                        />
                    </div>
                </form>
            </section>
        </main>
    );
}

export default Login;