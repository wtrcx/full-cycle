import express from "express";
import path from 'path';
import { database } from './database'

const app = express();

import peopleControler from "./modules/people/people.controler";

app.use("/api/peoples", peopleControler);
app.use(express.static(path.join(__dirname, '..', '/public')));

app.listen(process.env.PORT, () => {

  database.initialize().then(() => {
    console.log("Full Cycle Rocks!");
  }).catch((error) => {
    console.log(error);
  })

});
