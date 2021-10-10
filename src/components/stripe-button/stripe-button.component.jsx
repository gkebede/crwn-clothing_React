import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const bublishableKey = `pk_test_51JiHEJI0YoXWB7G5sZprFZtn5Mq9jOm0uPG4xsyqbPJTEH8Y5uh
                            2I5maDvSXSgxw0Zp3B4JZmwW4vSZSWclPs88Y00TZjjsHR6`;

    const onToken = (token) => {
        console.log(token);
        alert('Payment Successful')
    }


    return (

        <StripeCheckout
        
        label='pay Now '
        name= 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image ='https://svgshare.com/i/CUz.svg'
        description={`Your total is  $${price}`}
        amount={priceForStripe}  
        panelLabel = 'Pay Now'
        token ={onToken}
        stripeKey = {bublishableKey}

        />
    );
}

export default StripeCheckoutButton;