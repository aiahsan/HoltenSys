import { useHistory } from 'react-router-dom';
import {logout} from '../components/checkLogin'
import Routes from '../routes';

const Logout = () => {
    let history = useHistory();
    logout();
    history.push("/login");
    Routes();

    return (
        <>
        </>
    )
}

export default Logout;