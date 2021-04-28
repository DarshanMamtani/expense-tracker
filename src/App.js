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
                <Grid items xs={12} sm={3}>
                    <Details type="Income"/>
                </Grid>
                <Grid items xs={12} sm={3}>
                    <Main />
                </Grid>
                <Grid items xs={12} sm={3}>
                    <Details type="Expense" />
                </Grid>

            </Grid>
        </div>
    );
}

export default App;