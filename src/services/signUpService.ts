import bcrypt from 'bcrypt';

interface User {
    name: string, 
    lastName: string, 
    email: string, 
    password: string
};

export async function authenticateSignUp(userObject: User) {
    const { name, lastName, email, password } = userObject;

    const hashPassword = bcrypt.hashSync(password, 12);

    //const check = await emailRepository.emailCheck(email);

    //if (check === null) return null;
    
   // await userRepository.insertUserData(name, lastName, email, hashPassword);
}