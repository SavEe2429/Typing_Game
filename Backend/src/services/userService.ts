import { User } from "../models/User";
import { UserRepo } from "../repositories/UserRepository"
import bcrypt from 'bcrypt'

export const userService = async () => {

    const repo = new UserRepo();
    const userData = await repo.fetchAll()

    if (!userData) {
        throw new Error('repo was not response')
    }

    return userData

}

export const userEditService = async (data: any) => {
    const repo = new UserRepo();
    // hashing before record
    const user = await User.findOne({ email: data.email });
    if (!user) throw new Error("User not found");

    const isSamePassword = await bcrypt.compare(data.password, user.password);
    if (!isSamePassword) {
        const hashedPass = await bcrypt.hash(data.password, 10); // 10 คือ saltRounds = ค่ากำหนดว่ารหัสจะยากง่ายยิ่งเยอะยิ่งยาก
        data.password = hashedPass;
    }else{
        data.password = user.password;
    }
    const userData = repo.editUser(data);

    if (!userData) {
        throw new Error('repo was not response')
    }

    return userData
}

export const userDeleteService = async(data : any) => {
    const repo = new UserRepo();
    const userData = await repo.deleteUser(data);
    if(!userData){
        throw new Error("Can't delete user");
    }return userData
}