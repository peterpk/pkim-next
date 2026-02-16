'use client'

import { Box, Typography, Link, Popover, Paper } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import ArticleIcon from '@mui/icons-material/Article';
import StarIcon from '@mui/icons-material/Star';

import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import PaddedP from '_PaddedP';

function Writing() {

    const _stories = [
        {'title': 'Lie Detector Test', 'filename': 'lie-detector.md'},
        {'title': 'Why Me?', 'filename': 'why-me.md'},
        {'title': 'The Lobsters Dance', 'filename': 'lobsters.md'},
        {'title': 'Elixir', 'filename':'elixir.md'},
        {'title': 'Mad', 'filename':'mad.md'}
    ];

    const [openStory, setOpenStory] = React.useState(null);
    const [storyData, setStoryData] = React.useState([]);

    useEffect( () => {
        var allTheStories = [];
        _stories.map( (st, st_ix) => {
            fetch('_stories/' + st.filename)
            .then((response) => {
                if(!response.ok) {
                    throw new Error(`http error! ${response.status}`);
                }
                return response.text();
            })
            .then((tx) => {
                allTheStories.push({ix: st_ix, text: tx});
            })
        } );
        setStoryData(allTheStories);
    }, []);

    const handleClick = (event) => {
        setOpenStory(event.currentTarget.id);
        console.log(event.currentTarget);
    };

    const handleClose = () => {
        setOpenStory(null);
    }

    return (
        <Box sx={{'my': '2rem'}}>
            <Typography sx={{'marginY':'1rem'}} component='h1' variant='h1'>Microfiction</Typography>
            <PaddedP variant='body1'>
                I love to write. In my <a href="/Resume">day job</a>, I am the odd person who actually 
                enjoys writing documentation. But in my free time, I have taken up writing <em>microfiction</em>.
                Microfiction is, essentially, writing an <strong>extremely</strong> short story, usually 
                under 300 words in total. I love the craft of it: there is such a limited space in which to 
                tell a full story arc, so every single word counts. 
            </PaddedP>
            <PaddedP variant='body1'>
                A very long time ago, when the World Wide Web was nothing more than a cobweb, I
                hosted a site where I published my own fiction, and even got a few brave souls
                to allow me to post theirs as well. These days, I have been submitting my work
                to a few sites and contests, to see where my ideas might land. I have competed
                in the <Link href="https://www.nycmidnight.com/250" target="_blank">NYC Midnight 
                Microfiction (250 words)</Link> contest and 
                the <Link href="https://www.bathflashfictionaward.com/" target="_blank">Bath Flash 
                Fiction Awards</Link>, and I have also submitted work 
                to <Link href="https://101words.org/" target="_blank">101words.org</Link> &mdash; 
                fingers crossed!
            </PaddedP>
            <PaddedP>
                My accomplishments so far: 
                <List>
                    <ListItem>
                        <ListItemIcon><StarIcon /></ListItemIcon>
                        <strong>First place</strong>  in Round 1 of NYC Midnight Flash Fiction December 2021
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><StarIcon /></ListItemIcon>
                        Seventh place in Round 1 of NYC Midnight Flash Fiction December 2025 (second round is underway!)
                    </ListItem>
                    <ListItem>
                        <ListItemIcon><StarIcon /></ListItemIcon>
                        And turned down by many fantastic contests and sites! &#x1F600;
                    </ListItem>
                </List>
            </PaddedP>
            <PaddedP variant='body1'>
                If I&rsquo;ve made you curious, you can take a look at a couple of my pieces here.
                (I&rsquo;ll add more over time!)
            </PaddedP>
            <List>
                {_stories.map( (st, st_ix) => (
                    <ListItem disablePadding key={'story-' + st_ix} >
                        <ListItemButton onClick={handleClick} id={st_ix}>
                            <ListItemIcon><ArticleIcon/></ListItemIcon>
                            <ListItemText>{st.title}</ListItemText>
                        </ListItemButton>
                    </ListItem>
                )
                )}    
            </List>
            {
                storyData.map( (st) => (
                    <Popover key={'story-pop-' + st.ix} id={'story-pop-' + st.ix} 
                            slotProps={{paper: {elevation: 5}}}
                            sx={{'& .MuiPopover-paper': { minWidth: '80%', maxWidth: '80%', maxHeight: '80%' }}}
                            anchorReference="anchorPosition"
                            anchorPosition={{top: '100', left: '100'}} 
                            anchorOrigin={{vertical: 'top', horizontal: 'left' }}
                            open={openStory==st.ix}  onClose={handleClose}>
                        <Paper sx={{bgcolor: 'wheat', padding: '10px'}}>
                            <ReactMarkdown components={{
                                h2(props) {
                                    const {node, ...rest} = props;
                                    return <Typography component='h2' variant='h2' {...rest} />
                                },
                                p(props) {
                                    const {node, ...rest} = props;
                                    return <PaddedP variant='body1' {...rest} />
                                },
                                blockquote(props) {
                                    const {node, ...rest} = props;
                                    return <blockquote style={{color: 'darkblue'}} {...rest} />
                                }
                            }}
                            >{st.text}</ReactMarkdown>
                        </Paper>
                    </Popover>
                ))
            }
        </Box>
    );
}

export default Writing;