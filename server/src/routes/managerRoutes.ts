import express from "express";
const router = express.Router()
import {
    getManager,
    createManager,
    updateManager
} from "../controllers/managerController"


router.get("/:cognitoId", getManager)
router.post("/", createManager)
router.put("/:cognitoId", updateManager)

export default router