import { Grid, Typography, Container, Link } from "@mui/material";

import Image from 'next/image';

import PaddedP from "@/app/_PaddedP";

export default function Home() {
    return (
        <Container sx={{marginTop: "8em"}}>
            <Grid container columns={12} spacing={2}>
                <Grid size={2}>&nbsp;</Grid>
                <Grid size={9}>
                    <Image src="/headshot-round.png" 
                            style={{maxWidth: '300px', float: 'left', paddingRight: "2em"}} 
                            height="300" width="300"
                            alt="profile picture" 
                    />
                    <Typography component="h3" variant="h3">
                        Welcome to my home page!
                    </Typography>
                    <PaddedP component="p" variant="body1">
                        I'm a Software Architect with over 15 years of experience in
                        application development, system modernization, and IT leadership. My expertise 
                        spans mainframe systems, cloud computing, SAP ERP, data warehousing, and 
                        enterprise security architecture, delivering scalable and future-proof technology 
                        solutions. 
                    </PaddedP>
                    <PaddedP component="p" variant="body1">
                        In my career I have run the gamut of software development roles, from junior
                        developer straight out of college, to lead application architect, to 
                        enterprise architect, with even a stop in management along the way! My 
                        breadth of experience helps me easily integrate into new teams and new projects quickly.                   
                    </PaddedP>
                    <PaddedP component="p" variant="body1">
                        More about me? I was born and raised in Connecticut, a New Englander through
                        and through. (But don't ask me about any of the local sports-ball teams!) I 
                        am a husband and proud father of two kids, three cats, and two hermit crabs
                        (really!) I love stories (mostly reading, occasionally writing), solving puzzles,
                        playing games, and traveling to new places.
                    </PaddedP>
                    <Container sx={{paddingTop: "2em"}}>
                        <Typography component="p" variant="body2" >
                            Use the links above to check out my <Link href="/Resume">resume</Link> and
                            my <Link href="/Portfolio">portfolio</Link>, or feel free
                            to <Link href="/Contact">contact me</Link> directly!
                        </Typography>
                    </Container>
                </Grid>
                <Grid size={1}>&nbsp;</Grid>
            </Grid>
            
        </Container>
    );
}
