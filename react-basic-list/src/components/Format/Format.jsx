import { Grid } from '@material-ui/core';

const Format = ({ children }) => {
    return (
        <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh'}}
            >
            <Grid
                item
                style={{width: "250px"}}
                >
                {children}
            </Grid>
        </Grid>
    )
}

export default Format