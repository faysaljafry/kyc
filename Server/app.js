import express from 'express';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';
//cors Requirement and fixation
import cors from 'cors';
// import path from 'path';
// import { throws } from'assert');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//Connection string to MongoDB
const uri =
  'mongodb+srv://faysaljafry:faisal0341!@vuejs.yelyi.mongodb.net/kyc?retryWrites=true&w=majority';

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
  })
  .then(() => {
    console.log('Database connection established');
  })
  .catch((err) => {
    console.error(`ERROR: ${err}`);
  });

const client = mongoose.connection;
const port = 3000;

const app = express();
// middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.post('/saveForm', (req, res) => {
  const kyc = client.collection('kyc-data');
  kyc.insertOne({ ...req.body }, function (err, results) {
    if (err) {
      res.send('400');
      return;
    }
    res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
