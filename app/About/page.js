import { Paper, Typography } from '@mui/material';
import Link from 'next/link';

const About = () => {
    return (
        <>
            <Typography component='h1' variant='h1'>About this Site</Typography>
            <Paper sx={{mx:'10%', mt: 2, padding:2}} elevation={8}>
                <Typography component='p' variant='body1' sx={{py: '0.6rem'}}>
                    This site was created 
                    using <Link href='https://nextjs.org' target='_blank'>Next.js</Link> and <Link href='https://mui.com/material-ui/'>Material UI</Link>. 
                    Note that <strong>I am not a UI designer</strong> so it looks a little basic, but the function is there. 
                    The portfolio diagrams were created with <Link href='https://drawio.com' target='_blank'>Draw.io</Link> and use 
                    their &ldquo;minimized Javascript viewer&rdquo; for the lightbox display.
                </Typography>
                <Typography component='p' variant='body1' sx={{py: '0.6rem'}}>
                    The back-end for this site is currently... well, nothing. I plan to use
                    Amazon&rsquo;s <Link href='https://aws.amazon.com/sns/'>Simple Notification Service</Link> to 
                    send contact form submissions to me via email. As Leonardo da Vinci (apocryphally) said, 
                    &ldquo;Simplicity is the ultimate sophistication.&rdquo;
                </Typography>
                <Typography component='p' variant='body1' sx={{py: '0.6rem'}}>
                    This site is hosted 
                    on <Link href='https://aws.amazon.com' target='_blank'>Amazon Web Services</Link> using 
                    the <Link href='https://aws.amazon.com/s3/' target='_blank'>Amazon S3</Link> service. 
                    The source code is available 
                    on <Link href='https://www.github.com/peterpk/pete-kidwell-is-me' target='_blank'>GitHub</Link>.
                </Typography>
                <Typography component='p' variant='body1' sx={{py: '0.6rem'}}>
                    Over time, I would like to add more complexity to this site, and feature it in my own portfolio. 
                    But for now, it satisfies the need, and that&rsquo;s most important.
                </Typography>
            </Paper>
        </>
    );
}

export default About;