// import deps & components here
import { Routes, Route } from 'react-router-dom'
import Public from './components/Public'
import Login from './features/auth/Login'
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import TicketsList from './features/tickets/TicketsList'
import UsersList from './features/users/UsersList'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route index element={<Public />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dash' element={<DashLayout />}>
        // ToDo: Components for protected routes go here
        <Route index element={<Welcome />} />

        <Route path='tickets'>
          <Route index element={<TicketsList />} />
        </Route>


        <Route path='users'>
          <Route index element={<UsersList />} />
        </Route>


      </Route> {/* End /dash protected route */}
        
    </Routes>
  );
}

export default App;