import { useState } from 'react';

const NewAccount = () => {

    //State for Register User
    const [user, saveUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        canSave: ''
    });

    //Extract user
    const { email, password, firstName, lastName, role, canSave, confirmPassword } = user;


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

        //Password minimun 6 characters

        //Validate passwords fields to be equals

        //Send to action
    }

    return(
        <main className="login_body">
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
                            type="confirmPassword"
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
                        <input
                            type="role"
                            required
                            id="role"
                            name="role"
                            value={role}
                            onChange={onChange}
                            />
                        <label>Role</label>
                    </div>
                    <div className="txt_field">
                        <input
                            type="canSave"
                            required
                            id="canSave"
                            name="canSave"
                            value={canSave}
                            onChange={onChange}
                            />
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