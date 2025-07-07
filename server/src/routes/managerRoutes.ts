import express from "express";
const router = express.Router()
import {
    getManager,
    createManager
} from "../controllers/managerController"


router.get("/:cognitoId", getManager)
router.post("/", createManager)

export default router