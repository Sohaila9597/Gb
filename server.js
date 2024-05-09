
import express from 'express';
import { dbconnection } from './databases/dbConnection.js';
import medicalimageRouter from './src/modules/medicalimage/medicalimage.routes.js';

const app = express();
const port = 3000;


app.use(express.json())
app.get('/', (req, res) => res.send('hello world '))
app.use(medicalimageRouter)
dbconnection(),

app.listen(port, () =>  console.log(`example app running on port ${port}`))















