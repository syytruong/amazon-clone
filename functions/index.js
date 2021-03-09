const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const stripe = require("stripe")('sk_test_51DqZIOKRW5L3OCGZSG7Lel0NBlWAvM9sTNUM9kd8WJfxOKocbhu5TNg2GWwHQky31rwfbUUSSu9WsBMIJlKNF3Va00b9hfwIKX');

//APIs

// - App Configs
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello world!'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})

// - Listen commands
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-a2517/us-central1/api