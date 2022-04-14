import express from "express";
import { v4 as uuidv4 } from "uuid";

// init express router
const router = express.Router();

// users db
const users = [];

// all routes in here starts with /users
router.get("/", (req, res) => {
  res.send(users);
});

// creating & Adding users to our db
router.post("/", (req, res) => {
  const user = req.body;

  // generating a user id
  const userID = uuidv4();
  const userWithID = { ...user, id: userID };
  users.push(userWithID);

  res.send(
    `The User with the name ${user.firstName}, the last name of ${user.lastName} has been aded to the database!`
  );
});

// getting a specific user
router.get("/:id", (req, res) => {
  const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);
    
  res.send(foundUser);
});

export default router;
