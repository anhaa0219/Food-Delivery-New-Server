import express from "express";
import jwt from "jsonwebtoken";
import { requireToken } from "../../middleware/require-token.js";
import { requireAdmin } from "../../middleware/require-admin.js";
import { FoodCategory } from "../../schemas/category-schema.js";
import {
  foodCategoryControllerCreate,
  foodCategoryControllerDelete,
  foodCategoryControllerReadAll,
  foodCategoryControllerUpdate,
} from "../../controllers/foodCategory/foodCategoryController.js";
const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

router.post("/post", requireToken, requireAdmin, foodCategoryControllerCreate);
router.get("/get", foodCategoryControllerReadAll);
router.put("/put", requireToken, requireAdmin,foodCategoryControllerUpdate);
router.delete("/delete",requireToken, requireAdmin, foodCategoryControllerDelete);
export default router;
