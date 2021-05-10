const stripe = require('stripe')('sk_test_51Ip2MdKMd0SUlMVWNu1NPsVROqaT0goyyj2YA4avdxcLFgfGKi2z5wj1orMIG3ktkZ5mvy74K90oiZjZNdjBkUBr00Gzhjjntt');
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
          unit_amount: 2000,
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