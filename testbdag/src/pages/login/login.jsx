import React, { useState } from 'react';
import {
    Card,
    CardContent,
    TextField,
    InputAdornment,
    IconButton,
    Checkbox,
    FormControlLabel,
    Button,
    Typography,
    Box,
    Link,
} from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);

    const handleLogin = () => {
        // Replace this with actual login logic
        console.log({ username, password, remember });
    };

    return (
        <Box
            sx={{
                height: '100vh',
                width: '100vw',
                bgcolor: '#0e3454',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Card sx={{ width: { xs: '90vw', sm: '60vw', md: '30vw' }, p: 2 }}>
                <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 2 }}>
                        <Typography variant="h4" component="h1" sx={{ m: 0, color: '#0e3454' }}>
                            FinTracker
                        </Typography>
                        <Typography variant="h6" component="h2" sx={{ mt: 0, fontWeight: 'normal' }}>
                            Login
                        </Typography>
                    </Box>

                    <TextField
                        fullWidth
                        label="Username"
                        variant="outlined"
                        margin="normal"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <PersonOutlineIcon />
                                </InputAdornment>
                            ),
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type="password"
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockOutlinedIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                </CardContent>
            </Card>
        </Box>
    );
};

export default Login;
