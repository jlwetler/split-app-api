import * as signUpService from "../services/signUpService.js";
import { userSchema } from "src/schemas/userSchema.js";
import { Request, Response } from "express";

export async function signUp(req: Request, res: Response) {
    try {
        const userObject = await userSchema(req.body);
        
        const authenticate = await signUpService.authenticateSignUp(userObject)
        
        if (authenticate === null) return res.sendStatus(409);

        res.sendStatus(201);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}