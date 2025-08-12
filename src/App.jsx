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
import ThemeToggle from './components/theme-toggle/ThemeToggle';
import DefaultLayout from './components/layout/default-layout/DefaultLayout';
import Account from './pages/account/my-account/Account';
import Orders from './pages/account/my-orders/Orders';
import Address from './pages/account/address/Address';
import CreateAddress from './pages/account/address/create/CreateAddress';
import EditAddress from './pages/account/address/edit/EditAddress';
import Wishlist from './pages/account/my-wishlist/Wishlist';

function App() {


    return (
        <>

            <Routes>
                {/* -- Authentication -- */}
                <Route element={<AuthLayout />}>
                    <Route path='/' element={<SignIn />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                    <Route path='/otp-Verify' element={<OtpVerification />} />
                    <Route path='/mobile-otp-Verify' />
                    <Route path='/create-password' element={<CreatePassword />} />

                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/address-details' element={<AddressDetails />} />
                </Route>

                {/* -- Layout -- */}
                <Route element={<DefaultLayout />}>
                    {/* Account */}
                    <Route path='/account' element={<Account />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/address' element={<Address />} />
                    <Route path='/address/create' element={<CreateAddress />} />
                    <Route path='/address/edit/:id' element={<EditAddress />} />
                    <Route path='/wishlist' element={<Wishlist />} />
                </Route>

            </Routes>

            {/* -- ThemeToggle -- */}
            <ThemeToggle />

        </>
    )
}

export default App;