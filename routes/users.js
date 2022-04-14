import express from "express";
import UsersDB from "../usersdb.js"
// init express router
const router = express.Router();



// all routes in here starts with /users
router.get("/", (req, res) => {
  console.log(UsersDB);
  res.send("Testing users");
});

export default router;
