import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

import { Raleway } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import NavBar from './_NavBar';
import { Box } from '@mui/material';

import Script from 'next/script';

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

export const metadata = {
    'theme-color': '#000000',
    'description': 'Pete Kidwell - Architect at Large',
    'title': 'Pete Kidwell - Architect at Large'
};

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={`${raleway.variable}`}>
                <AppRouterCacheProvider>
                    <ThemeProvider theme={theme}>
                        <Box className='App' sx={{ margin: '1rem', width: '98%' }}>
                            <NavBar />

                            {children}
                        </Box>
                    </ThemeProvider>
                </AppRouterCacheProvider>
                <Script src='https://viewer.diagrams.net/js/viewer.min.js' />
            </body>
        </html>
    );
}
