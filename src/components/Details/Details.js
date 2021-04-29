import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';


const Details = ({ type }) => {
    const classes = useStyles();

    return (
        <Card className={type === "Income" ?  classes.income : classes.expense}>
            <CardHeader title={type} />
            <CardContent>
                <Typography variant="h5">₹50</Typography>
                <Doughnut />
            </CardContent>
        </Card>
    );
}

export default Details;