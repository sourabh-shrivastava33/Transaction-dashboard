import express from "express";
import {
  getAllTransaction,
  getCombinedResponse,
} from "../controllers/transactionController.js";
import { validateQuery } from "../middlewares/validationMiddleware.js";
const router = express.Router();
router.get("/", validateQuery, getAllTransaction);

router.get("/combiner", getCombinedResponse);
export default router;
