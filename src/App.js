import React from 'react';

import { Grid } from '@material-ui/core';
import useStyles from './styles';
import Details from './components/Details/Details';
import Main from './components/Main/Main';

const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                {/* This grid will be shown be hidded in mobile */}
                <Grid item xs={12} sm={3} className={classes.mobile} >
                    <Details type="Income"/>
                </Grid>

                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>

                {/* This grid will be shown be hidded in mobile */}
                <Grid item xs={12} sm={3} className={classes.desktop} >
                    <Details type="Income"/>
                </Grid>

                <Grid item xs={12} sm={3} className={classes.last}>
                    <Details type="Expense" />
                </Grid>

            </Grid>
        </div>
    );
}

export default App;