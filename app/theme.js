'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    'cssVariables': true, 
    'palette': {
        'mode': 'light',
        'primary': { 'main': '#00c7f5' },
        'secondary': { 'main': '#3f51b5' },
        'background': { 'default': '#e7e7e7' }
    },
    typography: {
        'fontFamily': 'var(--font-raleway)',
        'h1': {
            'fontSize': '3rem',
        },
        'h2': {
            'fontSize': '2.5rem',
        },
        'h3': {
            'fontSize': '2rem',
        },
        'h4': {
            'fontSize': '1.5rem',
        },
        'h5': {
            'fontSize': '1.3rem',
        },
        'h6': {
            'fontSize': '1rem',
        },
        'subtitle1': {
            'fontWeight': 600,
            'fontSize': '1.5rem',
        },
        'subtitle2': {
            'fontSize': '1.3rem',
        }
    }
});

export default theme;
