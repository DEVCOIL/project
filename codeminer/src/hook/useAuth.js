import { useContext } from 'react';

import { AuthConext } from '../hoc/AuthProvider';

export function useAuth(){
  return useContext(AuthConext);
}
