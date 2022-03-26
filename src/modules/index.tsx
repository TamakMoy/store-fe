import { Route, Routes, Navigate } from 'react-router-dom';
import { Account } from './account';
import { LoginContainer } from './login/containers/login.container';

export const App = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/accounts" />}/>
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/accounts/*" element={<Account />} />
    </Routes>
}
