import { useState } from 'react';

const Login = () => {

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

        //Send to action
    }
    
    return(
        <main className="login_body">
            <section className="center">
                <h1>Login</h1>
                <form
                    onSubmit={onSubmit}
                >
                    <div className="txt_field">
                        <input
                            type="email"
                            required
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
                            required
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