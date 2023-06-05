import React from 'react';
import './Main.css'
import allProducts from '../../data/products.json'
import { useState } from 'react'
import { Grid } from '@mui/material'
import Product from '../ProductComponent/Product'
import Cart from '../CartComponent/Cart'
import { Alert, Snackbar } from "@mui/material"


const Main = () => {

    const [products, setProducts] = useState(allProducts)
    const [cart, setCart] = useState([])
    const [snackSuccessOpen, setSnackSuccessOpen] = useState(false)
    const [snackFailedOpen, setSnackFailedOpen] = useState(false)

    const handleClose = (event, reason) => {
        setSnackSuccessOpen(false);
        setSnackFailedOpen(false);
    };

    return (
        <div className='main-body'>
            <Snackbar
                open={snackSuccessOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="success">
                    Payment Successfull
                </Alert>
            </Snackbar>
            <Snackbar
                open={snackFailedOpen}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <Alert severity="error">
                    Payment Failed
                </Alert>
            </Snackbar>
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={10}><h1>JAYAMAL STORE</h1></Grid>
                <Grid item lg={1} sx={{ display: 'table' }}><Cart cart={cart}
                    setSnackSuccessOpen={setSnackSuccessOpen}
                    setSnackFailedOpen={setSnackFailedOpen} /></Grid>
            </Grid>
            <Grid container spacing={2}>
                <RenderProducts products={products} cart={cart} setCart={setCart} />
            </Grid>
        </div>
    )
}

const RenderProducts = ({ products, cart, setCart }) => {
    console.log(products)
    return products.map(product => {
        return (
            <Grid key={product.id} item xs={3}>
                <Product product={product} cart={cart} setCart={setCart} />
            </Grid>
        )
    });
}

export default Main