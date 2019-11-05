import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import 'typeface-roboto';
import Typography from '@material-ui/core/Typography';

/*import Google from '../assets/GoogleIcon.png';
import Facebook from '../assets/FacebookIcon.png';*/

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function App () {
const classes = useStyles();

    return(
        <div>
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="md">
                    <Grid className={classes.root}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h2" compinent="h2">
                                        Sign in
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </React.Fragment>
        </div>
    );
}