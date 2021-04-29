import React from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from '../Form/Form';
import List from '../List/List';
import useStyles from './styles';


const Main = () => {
    const classes = useStyles();
    return ( 
        <Card classname={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">Balance: Rs. 5000</Typography>
                <Divider />
                <Form />
            </CardContent>

            <CardContent className={classes.cartContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
     );
}
 
export default Main;