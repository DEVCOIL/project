import { createContext, useState} from 'react';

export const AuthConext = createContext(null);

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null)



  const signin = (newUser, cb) => {
    setUser(newUser);
    cb();
  }


  const signout = (cb) => {
    setUser(null);
    cb();
  }

const value = {user, signin, signout}
  return <AuthConext.Provider value={value}>

    {children}

  </AuthConext.Provider>
}


export default AuthProvider
