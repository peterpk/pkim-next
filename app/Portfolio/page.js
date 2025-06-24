"use client";

import { useEffect } from 'react';

import { Grid, Box, Typography } from '@mui/material';

import Diagram from './_Diagram';

import portList from './_portfolio.json';

function PortfolioRow(props) {
    return (
        <>
            <Grid size={{xs:12,sm:4}}>
                <Typography component="h3" variant='h3'>{props.item.title}</Typography>
                <Typography variant='body2' component="p">{props.item.desc}</Typography>
            </Grid>
            <Grid size={{xs:12,sm:8}}>
                <Diagram name={props.item.fname} />
            </Grid>
        </>
    )
}

function Portfolio() {

    useEffect(() => {
        if(typeof window.GraphViewer !== "undefined") {
            window.GraphViewer.processElements();
        }
    }, [] );

    let gridSpace = {
        "paddingTop": {
            "xs": "1rem",
            "md": "2rem",
            "lg": "3rem"
        },
        "marginLeft": {
            "md": "1rem",
            "lg": "3rem"
        }
    };

    return (
        <Box>
            <Typography variant="h1" component="h1">My Portfolio</Typography>
            <Typography variant="body1" component="p">Click on any diagram to expand it and see all pages.</Typography>
            <Grid container rowSpacing={10} columnSpacing={2} sx={gridSpace}>
                { portList["files"].map( x => (
                    <PortfolioRow key={x.fname} rowKey={x.fname} item={x} />
                ))
                }
            </Grid>
        </Box>
    );
}

export default Portfolio;