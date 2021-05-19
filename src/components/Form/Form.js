import React, { useState, useContext } from 'react';
import { TextField, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { ExpenseContext } from '../../context/context';
import { v4 as uuid } from 'uuid';
import { incomeCategories, expenseCategories } from '../../assests/constants/categories';
import formatDate from '../../utils/formatDate';

const initialState = {
    amount: '',
    category: '',
    type: 'Income',
    date: formatDate(new Date()),
};

const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseContext);
    const selectedCategory = (formData.type === 'Income' ? incomeCategories : expenseCategories);

    const createTransaction = () => {
        const transaction = { ...formData, amount: Number(formData.amount), id: uuid() };

        addTransaction(transaction);
        setFormData(initialState);
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} >
                        <MenuItem value="Income">Income</MenuItem>
                        <MenuItem value="Expense">Expense</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Category</InputLabel>
                    <Select value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                        {selectedCategory.map(c => <MenuItem key={c.category} value={c.category}>{c.category}</MenuItem>)};
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField type="number" label="Amount" fullWidth
                    value={formData.amount} onChange={e => setFormData({ ...formData, amount: e.target.value })}></TextField>
            </Grid>
            <Grid item xs={6}>
                <TextField type="date" label="Date" fullWidth
                    value={formData.date} onChange={e => setFormData({ ...formData, date: formatDate(e.target.value) })}></TextField>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Add</Button>
        </Grid>
    );
}

export default Form;