//import * as userController from "../controllers/userController";
import * as signUpController from "../controllers/singUpController";
import { validateUserAndPassword } from "../middlewares/validateUserAndPassword"
import { Router } from 'express';

const router = Router ();

//router.post('/login', validateUserAndPassword, userController.login); 

router.post('/sign-up', signUpController.signUp); 

export default router;