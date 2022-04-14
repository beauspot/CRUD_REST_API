import express from "express"; 

import {
  getUser,
  createUser,
  getSpecificUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

// init express router
const router = express.Router();

// all routes in here starts with /users
router.get("/", getUser);

// creating & Adding users to our db
router.post("/", createUser);

// getting a specific user
router.get("/:id", getSpecificUser);

// deleting a user
router.delete("/:id", deleteUser);

// updating auser data
router.patch("/:id", updateUser);

export default router;
