import express from "express";
import { v4 as uuidv4 } from "uuid";

// init express router
const router = express.Router();

// users db
const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25,
  },

  {
    firstName: "Jane",
    lastName: "Doe",
    age: 24,
  },
];

// all routes in here starts with /users
router.get("/", (req, res) => {
  res.send(users);
});

// Adding users to our db
router.post("/", (req, res) => {
  const user = req.body;
  users.push(user);

  res.send(
    `The User with the name ${user.firstName}, the last name of ${user.lastName} has been aded to the database!`
  );
});

export default router;
