import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useStyles from './styles';
import useTransactions from '../../useTransactions';


const Details = ({ type }) => {
    const classes = useStyles();
    const { total, chartData } = useTransactions(type);

    return (
        <Card className={type === "Income" ?  classes.income : classes.expense}>
            <CardHeader title={type} />
            <CardContent>
                <Typography variant="h5">₹ {total}</Typography>
                <Doughnut data={chartData}/>
            </CardContent>
        </Card>
    );
}

export default Details;