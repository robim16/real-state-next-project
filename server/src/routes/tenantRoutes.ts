import express from "express";
const router = express.Router()
import {
    getTenant,
    createTenant,
    updateTenant
} from "../controllers/tenantController"


router.get("/:cognitoId", getTenant)
router.put("/:cognitoId", updateTenant)
router.post("/", createTenant)

export default router