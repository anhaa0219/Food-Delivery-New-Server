import express from "express";
import jwt from "jsonwebtoken";
import { requireToken } from "../../middleware/require-token.js";
import { requireAdmin } from "../../middleware/require-admin.js";
import { FoodOrder } from "../../schemas/order.js";
import {
  foodOrderControllerCreate,
  foodOrderControllerRead,
  foodOrderControllerUpdate,
  foodOrderControllerDelete,
} from "../../controllers/order/orderController.js";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/post", requireToken, foodOrderControllerCreate);
router.get("/get", foodOrderControllerRead);
router.put("/put", requireToken, requireAdmin, foodOrderControllerUpdate);
router.delete("/delete", requireToken, requireAdmin, foodOrderControllerDelete);
export default router;
