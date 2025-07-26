import express from "express";
const router = express.Router()
import {
    getProperties,
    getProperty,
    createProperty
} from "../controllers/propertyController"

import multer from "multer";
import { authMiddleware } from "../middleware/authMiddleware";


const storage = multer.memoryStorage()
const upload = multer({ storage: storage })


router.get("/", getProperties)
router.get("/:id", getProperty)
router.post("/",
    authMiddleware(["manager"]),
    upload.array("photos"),
    createProperty)

export default router