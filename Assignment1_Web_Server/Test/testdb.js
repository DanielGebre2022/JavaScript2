import { Seahawks } from "../Seahawks.js";

// return all records
Seahawks.find({}).lean()
  .then((Seahawks) => {
    console.log(Seahawks);
  })
  .catch(err => next(err));