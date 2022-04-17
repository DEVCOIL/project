import {Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import TopNav from './components/TopNav'
import Testing from './components/Testing'
import Profile from './components/Profile'
import Password from './components/Password'
import Architecture from './components/Architecture'
import Code from './components/Code'

import Documentation from './components/Documentation'
import Settings from './components/Settings'


import RequireAuth from './hoc/RequireAuth'

import AuthProvider from './hoc/AuthProvider'



function App() {
  return (
    <>
<AuthProvider>
      <Routes>

      <Route path="/" element={<RequireAuth> <TopNav /> </RequireAuth>}>
       <Route index element={<RequireAuth> <Architecture /> </RequireAuth>} />
        <Route path="/code" element={<RequireAuth> <Code /> </RequireAuth>} />
        <Route path="/documentation" element={<RequireAuth> <Documentation /> </RequireAuth>} />
       <Route path="/testing" element={<RequireAuth> <Testing /> </RequireAuth>} />
        <Route path="/settings" element={<RequireAuth> <Settings /> </RequireAuth>} />
      <Route path="/profile" element={<RequireAuth> <Profile /> </RequireAuth>} />

       <Route path="/password" element={<Password />} />
        <Route path="/" element={<Register />} />

        </Route>
      </Routes>
      </AuthProvider>
    </>
  )
}
export default App;
