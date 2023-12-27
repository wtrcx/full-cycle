import { Router } from "express";
import { PeopleService } from "./people.service";

const peopleControler = Router();

const peopleService = new PeopleService();

peopleControler.get("/", async (request, response) => {
  const peoples = await peopleService.insertAndSelectAll();

  return response.status(200).json(peoples);
});

export default peopleControler;
