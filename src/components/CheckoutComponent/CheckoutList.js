import React from 'react';
import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material"

const CheckoutList = ({ cart }) => {

    const GetItemList = () => {
        return cart.map(item => {
            return (
                <ListItem key={item.id}>
                    <Grid container>
                        <Grid item lg={6} sx={{ textAlign: "left" }}>
                            <ListItemText primary={item.title} />
                        </Grid>
                        <Grid item lg={2}>
                            <ListItemText primary={item.quantity} />
                        </Grid>
                        <Grid item lg={2}>
                            <ListItemText primary={item.price} />
                        </Grid>
                        <Grid item lg={2} sx={{ textAlign: "right" }}>
                            <ListItemText primary={item.price * item.quantity} />
                        </Grid>
                    </Grid>
                </ListItem>
            )
        })
    }

    const GetSumListItem = () => {
        const sum = cart.map(item => item.price * item.quantity).reduce((prev, next) => prev + next)
        return (
            <ListItem >
                <Grid container>
                    <Grid item lg={6} sx={{ textAlign: "left" }}>
                        <ListItemText primary={"Total"} />
                    </Grid>
                    <Grid item lg={2}>
                    </Grid>
                    <Grid item lg={2}>
                    </Grid>
                    <Grid item lg={2} sx={{ textAlign: "right" }}>
                        <ListItemText primary={sum} />
                    </Grid>
                </Grid>
            </ListItem>
        )
    }

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <GetItemList />
            <Divider />
            <GetSumListItem />
        </List>
    )

}

export default CheckoutList