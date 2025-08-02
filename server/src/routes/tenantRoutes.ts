import express from "express";
const router = express.Router()
import {
    getTenant,
    createTenant,
    updateTenant,
    getCurrentResidences,
    addFavoriteProperty,
    removeFavoriteProperty
} from "../controllers/tenantController"


router.get("/:cognitoId", getTenant)
router.put("/:cognitoId", updateTenant)
router.post("/", createTenant)
router.get("/:cognitoId/current-residences", getCurrentResidences)
router.post("/:cognitoId/favorites/:propertyId", addFavoriteProperty);
router.delete("/:cognitoId/favorites/:propertyId", removeFavoriteProperty);

export default router