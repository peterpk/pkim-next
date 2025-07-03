'use client';

import { Box, Typography, Link } from '@mui/material';

import GameBoard from './_GameBoard';

const BOARD_SIZE = 10;

function Game() {

    return (
        <Box>
            <Box sx={{'my': '2rem'}}>
                <Typography sx={{'marginY':'1rem'}} component='h1' variant='h1'>Daleks game</Typography>
                <Typography component='p'>
                    Daleks is an old game that I remember playing, and then coding up, on a 
                    Power Macintosh macOS clone back in the 1990s. It is based on
                    the <Link href='https://www.doctorwho.tv' target='_blank'>Doctor Who</Link> franchise,
                    and I thought it would be fun to try to bring it to life using
                    React.js. Enjoy!
                </Typography>
            </Box>
            <Box >
                <GameBoard boardSize={BOARD_SIZE} />
            </Box>
        </Box>
    );
}

export default Game;