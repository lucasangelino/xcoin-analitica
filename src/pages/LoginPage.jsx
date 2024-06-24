import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import InputField from '../components/InputField';
import StyledButton from '../components/StyledButton';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import logoImage from '../assets/LogoBurbuja.png';
import '../styles/LoginPage.css';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!username || !password) {
            setError('Username and password are required');
            return;
        }

        try {
            const response = await axios.post('https://api.inhouse.deliver.ar/users/employee/login', {
                email: username,
                password: password
            });

            // Guarda el token en el localStorage o en un contexto global
            localStorage.setItem('token', response.data.token);

            // Reset error state and show snackbar
            setError('');
            setOpenSnackbar(true);

            // Navegar a la página de inicio después de un breve retraso
            setTimeout(() => {
                navigate('/home');
            }, 2000); // Navegar después de 2 segundos

        } catch (error) {
            setError('Invalid username or password');
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    return (
        <Box className="login-background" display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
            <img src={logoImage} alt="XWallet Logo" style={{ height: '100px', marginBottom: '20px' }} />
            <Box
                width="100%"
                maxWidth={360}
                p={2}
                boxShadow={3}
                sx={{
                    bgcolor: 'background.paper',
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <h2>Login</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <InputField label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <InputField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                    <StyledButton>Log In</StyledButton>
                </form>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Login successful!"
            />
        </Box>
    );
}

export default LoginPage;
