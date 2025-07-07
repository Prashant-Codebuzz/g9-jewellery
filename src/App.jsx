import { Route, Routes } from 'react-router-dom';
// Css
import './css/App.scss';
import AuthLayout from './components/layout/auth-layout/AuthLayout';
import SignIn from './pages/authentication/sign-in/SignIn';
import ForgotPassword from './pages/authentication/forgot-password/ForgotPassword';
import OtpVerification from './components/otp-Verification/OtpVerification';
import CreatePassword from './pages/authentication/create-password/CreatePassword';
import SignUp from './pages/authentication/sign-up/SignUp';
import AddressDetails from './pages/authentication/address-details/AddressDetails';

function App() {


    return (
        <>

            <Routes>
                {/* -- Authentication -- */}
                <Route element={<AuthLayout />}>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/otp-Verify' element={<OtpVerification />} />
                    <Route path='/create-password' element={<CreatePassword />} />

                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/address-details' element={<AddressDetails />} />

                </Route>
            </Routes>



        </>
    )
}

export default App;