import express from "express";
const router = express.Router()
import {
    getManager,
    createManager,
    updateManager,
    getManagerProperties
} from "../controllers/managerController"


router.get("/:cognitoId", getManager)
router.put("/:cognitoId", updateManager)
router.get("/:cognitoId/properties", getManagerProperties)
router.post("/", createManager)

export default router