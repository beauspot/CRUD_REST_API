import express from "express";
// init express router
const router = express.Router();

// all routes in here starts with /users
router.get("/", (req, res) => {
  res.send("Testing users");
});

export default router;