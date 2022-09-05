import { useEffect, useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/authentication/authContext';


const PrivateRoute = ({ component: Component, ...props }) => {
    
    const authContext = useContext(AuthContext);
    const { authenticated, loading, userAuthenticated } = authContext;

    /* useEffect(() => {
        userAuthenticated();
        console.log("Authenticated Private Routes "+authenticated);
    },[]);
     */
    return(
        !authenticated && !loading ? <Navigate to="/" /> : <Outlet {...props} />
    );
}

export default PrivateRoute;