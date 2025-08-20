import express from "express";
import { login, register } from "../controllers/userController.js";
import { isAuthenticated } from "../Middleware/isAuthenticated.js";

const router = express.Router();

router.route("/").get((req, res) => {
  res.send("<h1>Welcome to Middleware</h1>");
});

router.route("/register").post(isAuthenticated, register);
router.route("/login").post(login);

export default router;
