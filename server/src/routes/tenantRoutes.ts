import express from "express";
const router = express.Router()
import {
    getTenant,
    createTenant
} from "../controllers/tenantController"


router.get("/:cognitoId", getTenant)
router.post("/", createTenant)

export default router