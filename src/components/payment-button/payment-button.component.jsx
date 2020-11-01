import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const PaymentButton = ({price}) => {
    const publishableKey = 'pk_test_51HiMD6AGgQZNSMxp0hYPFFNkOMYone8mc0KgKW28A4mtvdqshdWxzeZ5JViZQ9bKut9dAWP5oEh06OeZv2li49Pw00gAgqS8Jp'
    const priceForStrip = price * 100
   const onToken = (token) => {
      console.log(token)
      alert('payment successful')
  }
    return (
      <StripeCheckout
        label='pay now'
        name='crown clothing & partners'
        token={onToken}
        stripeKey={publishableKey}
        amount={priceForStrip}
        description={`your total is $${price}`}
        shippingAddress
        billingAddress
      />
    )
}
//to see other properties you can use in the <StripCheckout/> component 
// you can find them in a github repository called react-strip-checkout
export default PaymentButton;
