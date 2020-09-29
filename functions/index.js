// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HWK0jBcF3wNQlhYAFzFJ9Q3XoU31Kpzow3ClL2MKgbYbt8gGpayMQsDv7IwqfYUL1VaLvpqOQJmcX245QWiff8k00q8WiVNLm"
);

// - API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received for this amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// example edpoint created automatically with firebase emulators start
// http://localhost:5001/challenge-b6e78/us-central1/api
