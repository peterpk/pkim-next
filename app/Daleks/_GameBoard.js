'use client';

import React, { useCallback, useState, useRef, useEffect } from 'react';

import { Box, Button, Grid, Typography } from '@mui/material';

import Image from 'next/image';

import PaddedP from '@/_PaddedP';


const NBSP = String.fromCharCode(160);

function placeFirstDaleks (boardSize) {
    let daleks0 = [];
    const center = Math.trunc(boardSize/2);

    let dx = 0;
    let dy = 0;

    for(const x of Array(boardSize).keys()) {
        do {
            dx = Math.trunc(Math.random() * boardSize);
            dy = Math.trunc(Math.random() * boardSize);
            
        } while ( daleks0.includes([dx, dy]) || ( (dx === center) && (dy === center) ) );
        daleks0.push([dx, dy]);
    }

    return daleks0;
}

function GameBoard( { boardSize } ) {

    const tardis = useRef( [ Math.trunc(boardSize/2), Math.trunc(boardSize/2) ] );
    const daleks = useRef( [] );
    const piles = useRef([]);
    const gameOver = useRef(' ');
    const didSonic = useRef(false);

    const [ moveNum, setMoveNum ] = useState(-1);
    const [ curMsg, setMsg ] = useState('');

    function makeMove() {
        // return 'W' or 'L' if it's Game Over

        // clear last message
        setMsg('');

        // check for dumb move (or bad teleport) by player
        // this would pre-empt any Dalek movement
        console.log('makeMove initial check', piles.current);
        if( (tardis.current in daleks.current) || (tardis.current in piles.current) ) {
            return 'L';
        }
        
        // make the Daleks move
        let isGameOver = ' ';
        let dCopy = daleks.current.map((r) => r.slice());

        // 1. Make all Daleks move "at the same time"
        for (const d of Array(dCopy.length).keys()) {
            const newd0 = dCopy[d][0] + Math.sign(tardis.current[0] - dCopy[d][0]);
            const newd1 = dCopy[d][1] + Math.sign(tardis.current[1] - dCopy[d][1]);
            dCopy[d] = [newd0, newd1];
        }

        // 2. Check for Dalek collisions
        let board = {
            'keys': []
        }; // associative array to track daleks and piles

        // 2a. Add the existing piles
        for(const [px, p] of piles.current.entries()) {
            const boardKey = 'r' + p[0].toString() + 'c' + p[1].toString();
            const pileObj = {
                'type': 'pile',
                'loc': [p[0], p[1]],
                'orig': px,
                'crashers': []
            };
            board[boardKey] = pileObj;
            board.keys.push(boardKey);
        }

        // 2b. Add the Tardis
        const tardisKey = 'r' + tardis.current[0].toString() + 'c' + tardis.current[1].toString();
        board[tardisKey] = {
            'type': 'tardis',
            'loc': tardis.current,
            'crashers': []
        };
        board.keys.push(tardisKey);

        // 2c. Check new Dalek locations
        for (const [dx,d] of dCopy.entries()) {
            const boardKey = 'r' + d[0].toString() + 'c' + d[1].toString();
            if(boardKey in board) {
                switch(board[boardKey].type) {
                    case 'pile':
                        board[boardKey].crashers.push(dx);
                        break;
                    
                    case 'dalek':
                        const pileObj = {
                            'type': 'pile',
                            'loc': [d[0], d[1]],
                            'orig': -1,
                            'crashers': [dx, board[boardKey].orig]
                        };
                        board[boardKey] = pileObj;
                        break;

                    case 'tardis':
                        isGameOver = 'L';
                        board[boardKey].crashers.push(dx);
                        break;

                    default:
                        break; 
                }

            }
            else {
                const dalekObj = {
                    'type': 'dalek',
                    'loc': [d[0], d[1]],
                    'orig': dx
                };
                board[boardKey] = dalekObj;
                board.keys.push(boardKey);
            }
        }

        // 4. Re-create arrays from board
        daleks.current.length = 0;
        piles.current.length = 0;
        for(const k of board.keys) {
            switch(board[k].type) {
                case 'dalek':
                    daleks.current.push(board[k].loc);
                    break;

                case 'pile':
                    if(!(board[k].loc in piles.current)) {
                        piles.current.push(board[k].loc);
                    }
                    break;
                    
                default:
                    break;
            }
        }

        // 5. Check if Tardis wins
        if( (daleks.current.length === 0) && (tardis.current[0] > -1) ) {
            isGameOver = 'W';
        }

        return isGameOver;
    }

    function doKeyPress(event) {
        
        let tardisNew = tardis.current;
        let ignoreKey = (gameOver.current !== ' '); // if game is over, ignore all keystrokes

        if(gameOver.current === ' ') {
            switch(event.key) {
                case 'ArrowLeft':
                case 'A':
                case 'a':
                case '4': // num keypad
                    if(tardisNew[1] > 0) {
                        tardisNew = [tardisNew[0], tardisNew[1]-1];
                    }
                    break;
                
                case 'ArrowRight':
                case 'D':
                case 'd':
                case '6': // num keypad
                    if(tardisNew[1] < boardSize-1) {
                        tardisNew = [tardisNew[0], tardisNew[1]+1];
                    }
                    break;
                
                case 'ArrowUp':
                case 'W':
                case 'w':
                case '8': // num keypad
                    if(tardisNew[0] > 0) {
                        tardisNew = [tardisNew[0]-1, tardisNew[1]];
                    }
                    break;
                
                case 'ArrowDown':
                case 'X':
                case 'x':
                case '2': // num keypad
                    if(tardisNew[0] < boardSize-1) {
                        tardisNew = [tardisNew[0]+1, tardisNew[1]];
                    }
                    break;

                case 'Q':
                case 'q':
                case '7': // num keypad
                    if( (tardisNew[0] > 0) && (tardisNew[1] > 0) ) {
                        tardisNew = [tardisNew[0]-1, tardisNew[1]-1];
                    }
                    break;

                case 'Q':
                case 'q':
                case '7': // num keypad
                    if( (tardisNew[0] > 0) && (tardisNew[1] > 0) ) {
                        tardisNew = [tardisNew[0]-1, tardisNew[1]-1];
                    }
                    break;
                
                case 'E':
                case 'e':
                case '9': // num keypad
                    if( (tardisNew[0] > 0) && (tardisNew[1] < boardSize-1) ) {
                        tardisNew = [tardisNew[0]-1, tardisNew[1]+1];
                    }
                    break;
                
                case 'Z':
                case 'Z':
                case '1': // num keypad
                    if( (tardisNew[0] < boardSize-1) && (tardisNew[1] > 0) ) {
                        tardisNew = [tardisNew[0]+1, tardisNew[1]-1];
                    }
                    break;
                
                case 'C':
                case 'c':
                case '3': // num keypad
                    if( (tardisNew[0] < boardSize-1) && (tardisNew[1] < boardSize-1) ) {
                        tardisNew = [tardisNew[0]+1, tardisNew[1]+1];
                    }
                    break;

                case 'S':
                case 's':
                case '5': // num keypad
                    // don't move, let daleks move
                    break;

                case 'H':
                case 'h':
                case 'Enter': // num keypad
                    lastStand();
                    break;

                case ' ':
                case '+': // num keypad
                    if(!(didSonic.current)) {
                        for(const [dx,d] of daleks.current.entries()) {
                            if( (d[0] >= tardis.current[0] - 1) && 
                                (d[0] <= tardis.current[0] + 1) &&
                                (d[1] >= tardis.current[1] - 1) &&
                                (d[1] <= tardis.current[1] + 1) ) {
                                    daleks.current[dx] = [-1,-1];
                                    piles.current.push(d);
                            }
                        }
                        daleks.current = daleks.current.filter(
                            (x) => ( (x[0] !== -1) && (x[1] !== -1) )
                        );
                        didSonic.current = true;
                    }
                    else {
                        setMsg('Sonic was already used.');
                        ignoreKey = true; // give the player a chance to reconsider
                    }
                    break;

                case 'T':
                case 't':
                case '0': // num keypad
                    // teleport
                    tardisNew = [Math.trunc(Math.random() * boardSize), Math.trunc(Math.random() * boardSize)]
                    break;

                default:
                    ignoreKey = true;
            }
        }

        if(!ignoreKey) {
            event.preventDefault();

            if(tardisNew !== tardis) {
                tardis.current = tardisNew;
                gameOver.current = makeMove();
            }

            setMoveNum((moveNum) => moveNum + 1);
        }
        
    }

    function restartGame() {
        tardis.current = [ Math.trunc(boardSize/2), Math.trunc(boardSize/2) ];
        daleks.current = placeFirstDaleks(boardSize);
        piles.current = [];
        gameOver.current = ' ';
        didSonic.current = false;
        setMsg('');
        setMoveNum(0);
    }

    function lastStand() {
        const done = makeMove();
        setMoveNum((moveNum) => moveNum + 1);
        if(done === ' ') {
            window.setTimeout(lastStand, 1000);
        }
        gameOver.current = done;
    }

    // start it up
    // set up initial Dalek positions (randomly) here to avoid hydration errors
    useEffect( () => {
        // set up init Dalek positions
        daleks.current = placeFirstDaleks(boardSize);
        setMoveNum((moveNum) => moveNum + 1); // trigger refresh of board

        // set up key listener on initial render
        document.addEventListener('keyup', doKeyPress);
        return () => { document.removeEventListener('keyup', doKeyPress); }
    }, []);

    // generate board from given refs
    let board1D = new Array(boardSize * boardSize).fill(NBSP);
    
    // place the Daleks
    for(const d of daleks.current) {
        board1D[d[0] * boardSize + d[1]] = 'D';
    }
    
    // place the Piles
    for(const p of piles.current) {
        board1D[p[0] * boardSize + p[1]] = 'P';
    }

    // place the Tardis last, so if it's game over, broken Tardis icon is on top
    if(gameOver.current === 'L') {
        // game over, player lost
        board1D[tardis.current[0] * boardSize + tardis.current[1]] = 'X';
    }
    else {
        board1D[tardis.current[0] * boardSize + tardis.current[1]] = 'T';
    }

    const getCell = useCallback((cellVal, cellIx) => {
        const row = Math.floor(cellIx / boardSize);
        const col = cellIx % boardSize;

        let imgName = '';
        switch(cellVal) {
            case 'T':
                imgName = '/tardis-png-icon-16.jpg';
                break;
            case 'D':
                imgName = '/dalek.jpg';
                break;
            case 'P':
                imgName = '/pile.png';
                break;
            case 'X':
                imgName = '/lost.jpg';
                break;
            default:
                imgName = '/blank.jpg';
                break;
        }

        const top = row * 32;
        const left = col * 32;
        const elKey = row.toString() + '.' + col.toString();

        const sx = {
            'border': '1px solid',
            'position': 'absolute',
            'top': top.toString() + 'px',
            'left': left.toString() + 'px',
            'width': '32px',
            'height': '32px'
        };

        return (
            <div key={elKey} style={sx} mykey={elKey}>
                <Image src={imgName} alt='Game board piece' height='32' width='32' />
            </div>
        );

    }, [moveNum]);

                  
    return (
        <Grid container>
            <Grid size={4}>
                <Box sx={{'position': 'relative'}} width={32*boardSize} height={32*boardSize}>
                    {
                        board1D.map(getCell)
                    }
                </Box>
                <Box>
                    { gameOver.current !== ' ' ? 
                        <Button variant='outlined' onClick={restartGame}>Restart</Button> : 
                        '' 
                    }
                </Box>
            </Grid>
            <Grid size={8}>
                {
                    gameOver.current === 'L' ? 
                        (<Typography component='h3' variant='h3' sx={{color: 'red'}}>Defeat!</Typography>) : 
                        (gameOver.current === 'W' ? 
                            (<Typography component='h3' variant='h3' sx={{color: 'green'}}>&#x1F389; Victory!</Typography>) :
                            ''
                        )
                }

                {
                    <PaddedP variant='body2' sx={{color: 'red'}}>{curMsg}</PaddedP>
                }

                <Typography component='h3' variant='h3'>Overview</Typography>
                <PaddedP variant='body1'>
                    Move the Tardis and avoid the Daleks! Daleks will move one step closer to the Tardis 
                    on every move. Destroy Daleks by making them run into each other, creating radioactive
                    piles. (Daleks are also destroyed when they run into piles.) Destroy all the Daleks to
                    win the game!
                </PaddedP>

                <Typography component='h3' variant='h3' sx={{mt:'3rem'}}>Movement</Typography>
                <table style={{textAlign: 'center', fontFamily: 'monospace', fontSize: 'larger', paddingTop: '1rem'}}>
                    <tbody>
                        <tr>
                            <td>Q/7</td>
                            <td>&nbsp;</td>
                            <td>W/8</td>
                            <td>&nbsp;</td>
                            <td>E/9</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&#x2196;</td>
                            <td>&uarr;</td>
                            <td>&#x2197;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>A/4</td>
                            <td>&larr;</td>
                            <td>*</td>
                            <td>&rarr;</td>
                            <td>D/6</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>&#x2199;</td>
                            <td>&uarr;</td>
                            <td>&#x2198;</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr>
                            <td>Z/1</td>
                            <td>&nbsp;</td>
                            <td>X/2</td>
                            <td>&nbsp;</td>
                            <td>C/3</td>
                        </tr>
                    </tbody>
                </table>
        
                <PaddedP variant='body2'>
                    Arrow keys work as well. Press <strong>S or 5</strong> to take a turn
                    by staying in the same place.
                </PaddedP>
                <PaddedP variant='body1'>
                    Press <strong>T or 0</strong> to teleport to a random space on the grid
                    (beware: you might teleport right on to a Dalek!)
                </PaddedP>

                <Typography component='h3' variant='h3' sx={{paddingTop: '3rem'}}>Actions</Typography>
                <PaddedP variant='body1'>
                    Press <strong>space or +</strong> to use your Sonic Screwdriver
                    to destroy all Daleks next to the Tardis. <strong>This can only be
                    done once per game!</strong>
                </PaddedP>
                <PaddedP variant='body1'>
                    Press <strong>H or Enter</strong> to make your &ldquo;last stand&rdquo;. All Daleks 
                    will continue to come at you until they &ndash; or you! &ndash; are destroyed and
                    the game is over!
                </PaddedP>
            </Grid>
        </Grid>
    );
}

export default GameBoard;