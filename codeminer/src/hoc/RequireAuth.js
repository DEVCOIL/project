import { useLocation, Navigate } from 'react-router-dom'
import { useAuth } from '../hook/useAuth';

const RequireAuth = ({children}) => {
  const location = useLocation();
  const {user} = useAuth();

if (!user){

  return <Navigate to='/register' state={{from: location}} />
}

}

export default RequireAuth
