const stripe = require('stripe')(process.env.keyStripe);
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3030';

async function Checkout (req, res){
  console.log(req.body)
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'mxn',
          product_data: {
            name: req.body.name,
            images: ['https://i.ibb.co/52SV227/1.jpg'],
          },
          unit_amount: 1000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `https://kanji-shop.herokuapp.com/v1`,
    cancel_url: `https://kanji-shop.herokuapp.com/v1/cart`,
  });

  res.json({ id: session.id });
};

module.exports = {
    Checkout
}