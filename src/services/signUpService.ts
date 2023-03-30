import bcrypt from 'bcrypt';
import { getRepository } from "typeorm";
import User from "../entities/User"

interface UserObject {
    name: string, 
    email: string, 
    password: string
};

export async function authenticateSignUp(userObject: UserObject) {
    const { name, email, password } = userObject;

    const hashPassword = bcrypt.hashSync(password, 12);

    const check = await getRepository(User).insert({
        name
    })
    
    //const check = await emailRepository.emailCheck(email);

    //if (check === null) return null;
    
    await getRepository(User).findOne({
        where: {
            name, email, password: hashPassword
          }
    })

   // await userRepository.insertUserData(name, lastName, email, hashPassword);
}