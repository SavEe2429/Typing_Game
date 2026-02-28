import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../models/User';

const JWT_SECRET  = process.env.JWT_SECRET as string; 
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN as jwt.SignOptions['expiresIn'];

export const loginService = async (Credential: any) => {
    // หา user จาก mongodb
    const user = await User.findOne({ email: Credential.email });
    if (!user) {
        throw new Error('User not Found');
    }

    // ตรวจรหัส
    const isMatch = await bcrypt.compare(Credential.password, user.password);
    if (!isMatch) {
        throw new Error('Password not Matched');
    }

    // สร้าง token ฝัง userId and role
    const token = jwt.sign(
        { userId: user._id, role: user.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES_IN }
    );

    return {token , user : {email : user.email , role : user.role}}
}