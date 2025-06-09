import { Typography } from "@mui/material";

function PaddedP (props) {
    return (
        <Typography component="p" variant={props.variant} sx={{pt:"1rem"}}>
            {props.children}
        </Typography>
    );
}

export default PaddedP;