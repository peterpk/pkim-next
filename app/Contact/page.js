import { Typography, Link, Stack, Grid, Container } from '@mui/material';
import PaddedP from '_PaddedP';
import { LinkedIn, Email, Phone } from '@mui/icons-material';

function ContactForm() {
    return (
        <>
            <Typography component='h1' variant='h1'>Contact Me</Typography>
            <Container>
                <PaddedP variant='body1'>
                    In the future, I want to have a pretty form here that you 
                    can fill out and send me a message. In the meantime, however,
                    let&rsquo;s go old-school:
                </PaddedP>
                <Grid container columns={10} sx={{width: '100%', mt: '2rem'}}>
                    <Grid size={{xs:10, md:2}} offset={{xs: 0, md: 1}}>
                        <Stack alignItems='center' direction='row' gap={2}>
                            <Email /> 
                            <Typography variant='body1' component='span'>
                                <Link href='mailto:peterkidwell@gmail.com'>PeterKidwell@gmail.com</Link>
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid size={{xs:10, md:2}} offset={{xs: 0, md: 1}}>
                        <Stack alignItems='center' direction='row' gap={2}>
                            <LinkedIn /> 
                            <Link href='https://www.linkedin.com/in/peter-kidwell' target='_blank'>
                                <Typography variant='body1' component='span'>LinkedIn</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid size={{xs:10, md:2}} offset={{xs: 0, md: 1}}>
                        <Stack alignItems='center' direction='row' gap={2}>
                            <Phone /> 
                            <Link href='tel:+1-860-329-3548' target='_blank'>
                                <Typography variant='body1' component='span'>+1-860-329-3548</Typography>
                            </Link>
                        </Stack>
                    </Grid>
                    <Grid size={1}>&nbsp;</Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ContactForm;