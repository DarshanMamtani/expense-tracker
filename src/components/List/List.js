import React from 'react';
import { List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, AccountBalanceWallet } from '@material-ui/icons';
import useStyles from './Style';

const List = () => {
    const classes = useStyles();

    const transaction = [
        { id: 1, type: "Income", category: "Salary", amount: 50000, date: "01-01-2021" },
        { id: 1, type: "Expense", category: "Salary", amount: 50000, date: "01-01-2021" },
    ];
    return (
        <MUIList dense={false} className={classes.list} >
            {transaction.map(transaction => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                                <AccountBalanceWallet />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>

                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}

export default List;