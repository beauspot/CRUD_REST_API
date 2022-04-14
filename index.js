import express from "express";
import bodyParser from "body-parser";

// importing router file
import usersRoutes from "./routes/users.js"

const app = express();
const PORT = process.env.PORT || 5000;

// init body parser middleware
app.use(bodyParser.json());

app.use("/users", usersRoutes)

// first index route
app.get("/", (req, res) => {
  console.log("[TEST]!");
  res.send("<h1>Hello From the home route.</h1>");
});

app.listen(PORT, () =>
  console.log(
    ` Server Started on port: http://localhost:${PORT}, press CTRL + C to cancel the process`
  )
);
