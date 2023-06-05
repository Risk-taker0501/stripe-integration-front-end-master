import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import CheckoutList from '../CheckoutComponent/CheckoutList';
import StripeCheckoutForm from '../StripeCheckoutComponent/StripeCheckout';
import './Cart.css'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUB_KEY);
const Cart = ({ cart, setSnackSuccessOpen, setSnackFailedOpen }) => {

    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }

    const goToCheckout = () => {
        setOpen(true)
    }

    return (
        <div className='cart-icon'>
            <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon onClick={goToCheckout} fontSize="large" color="primary" />
            </Badge>
            <Checkout open={open} handleClose={handleClose}
                cart={cart} setSnackSuccessOpen={setSnackSuccessOpen}
                setSnackFailedOpen={setSnackFailedOpen} />
        </div>
    )
}

const Checkout = ({ open, handleClose, cart, setSnackSuccessOpen, setSnackFailedOpen }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="sm"
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title" sx={{
                textAlign: 'center',
                color: 'white',
                backgroundColor: '#D78282'
            }}>
                {"Checkout"}
            </DialogTitle>
            <DialogContent>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    m: 'auto',
                    width: '100%',
                }}>
                    <CheckoutList cart={cart} />
                </Box>


            </DialogContent>
            <Box sx={{
                color: 'white',
                backgroundColor: '#D78282',
                padding: "16px 16px"
            }}>
                <Elements stripe={stripePromise}>
                    <StripeCheckoutForm cart={cart} handleClose={handleClose}
                        setSnackSuccessOpen={setSnackSuccessOpen}
                        setSnackFailedOpen={setSnackFailedOpen} />
                </Elements>
            </Box>
        </Dialog>
    )
}

export default Cart