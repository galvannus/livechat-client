import { useContext, useEffect, Fragment } from 'react';
import AuthContext from '../../context/authentication/authContext';

const Bar = () => {

    //Extract the information fro, authenticaton
    const authContext = useContext(AuthContext);
    const { user, logout, userAuthenticated } = authContext;

    useEffect(() => {
        userAuthenticated();
    },[]);

    return(
        <header className="header">
            {user
            ? <Fragment>
                <h1 className="padding_left_10">{user.firstName}</h1>
                <button
                    onClick={() => logout()}
                >
                    <i className="fa-solid fa-right-from-bracket"></i>
                </button>
            </Fragment>
            : null}
            
        </header>
    );
}

export default Bar;