const express = require("express");

const loginController = require("../controllers/login");
const profileController = require("../controllers/profile");
const registerController = require("../controllers/register");
const tokenController = require("../controllers/validToken");
const auth = require("../auth/auth");
const changePasswordController = require("../controllers/changePassword");

const user_route = express();

user_route.set('view engine', 'ejs');
user_route.set('views', './views')

user_route.get("/login", loginController.loadLogin);
user_route.post("/login", loginController.loginUser);

user_route.get("/register", registerController.loadRegister);
user_route.post("/register", registerController.registerUser);

user_route.post("/tokenValid", auth.authorizedRoutes, tokenController.validToken);

user_route.get("/profile", auth.authorizedRoutes, profileController.loadProfile);

user_route.post("/change-password", auth.authorizedRoutes, changePasswordController.changePassword);

module.exports = {user_route};