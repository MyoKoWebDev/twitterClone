import express from "express";
import {
  signup,
  login,
  logout,
  getMe,
} from "../controllers/auth.controller.js";
import productRoute from "../middlewares/productRoute.js";

const router = express.Router();

router.get("/me", productRoute, getMe);
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

export default router;
