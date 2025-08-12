import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.jsx'

import { ToastContainer } from 'react-toastify' 

createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <ThemeProvider>
            <App />
        </ThemeProvider>

        <ToastContainer
            position="top-center"
            autoClose={2000}
            closeOnClick
            theme="colored"
        />

    </BrowserRouter>
)
