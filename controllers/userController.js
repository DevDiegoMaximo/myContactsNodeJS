const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route POST /api/users/register
//@access public

const registerUser = asyncHandler(async (res, req) => {
  res.json({ message: "Register the user" });
});

//@desc Login user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (res, req) => {
  res.json({ message: "Login the user" });
});

//@desc Login user
//@route POST /api/users/current
//@access private
const currentUser = asyncHandler(async (res, req) => {
  res.json({ message: "" });
});
module.exports = { registerUser, loginUser, currentUser };
