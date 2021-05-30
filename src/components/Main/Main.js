import React, { useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import Form from '../Form/Form';
import List from '../List/List';
import useStyles from './styles';
import { ExpenseContext } from '../../context/context';


const Main = () => {
    const classes = useStyles();
    const { balance } = useContext(ExpenseContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" />
            <CardContent>
                <Typography align="center" variant="h5">Balance: ₹ {balance}</Typography>
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