import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { wktToGeoJSON } from "@terraformer/wkt";


const prisma = new PrismaClient()


export const listApplications = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId, userType } = req.query
        let whereClause = {}
        if (userId && userType) {
            if (userType === "tenant") {
                whereClause = { tenantCognitoId: String(userId) };
            } else if (userType === "manager") {
                whereClause = {
                    property: {
                        managerCognitoId: String(userId),
                    },
                };
            }
        }


    } catch (error: any) {
        res.status(500).json({ message: `Error retrieving applications: ${error.message}` })
    }
}



export const getLeasePayments = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {

    } catch (error: any) {
        res
            .status(500)
            .json({ message: `Error retrieving lease payments: ${error.message}` });
    }
};