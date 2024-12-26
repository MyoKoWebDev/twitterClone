import express from "express";
import protectRoute from "../middlewares/productRoute.js";
import {
  createPost,
  deletePost,
  commentPost,
  likePost,
  getAllPost,
  getLikedPosts,
  getFollowingPost,
  getUserPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/all", protectRoute, getAllPost);
router.get("/following", protectRoute, getFollowingPost);
router.get("/likes/:id", protectRoute, getLikedPosts);
router.get('/user/:username',protectRoute,getUserPosts)
router.post("/create", protectRoute, createPost);
router.delete("/:id", protectRoute, deletePost);
router.post("/comment/:id", protectRoute, commentPost);
router.post("/like/:id", protectRoute, likePost);

export default router;
