import { v4 as uuidv4 } from "uuid";
//import { users } from "../usersdb.js";
let users = [];

// get user route
export const getUser = (req, res) => {
  res.send(users);
};

// post || create user route.
export const createUser = (req, res) => {
  const user = req.body;
  /*   
    const userId = uuidv4();
    const userWithId = { ...user, id: userId };
    users.push(userWithId);  
    <== for ref purpose ==>
  */
  users.push({ ...user, id: uuidv4() });
  res.send(
    `User with the name ${user.firstName} & ${user.lastName} was added to the database!`
  );
};

// get a single user route.
export const getSpecificUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

// delete a user route.
export const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);
  res.send(`The User with the id ${id} has been deleted from the database.`);
};

// update the user data route.
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;
  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`The user with the id ${id} has been updated!`);
};
