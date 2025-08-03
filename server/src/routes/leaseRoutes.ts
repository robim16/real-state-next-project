import express from "express";
const router = express.Router()
import {
    getLeasePayments,
    getLeases
} from "../controllers/leaseController"
import { authMiddleware } from "../middleware/authMiddleware";


router.get("/", authMiddleware(["manager", "tenant"]), getLeases)
router.get(
  "/:id/payments",
  authMiddleware(["manager", "tenant"]),
  getLeasePayments
);
export default router