import { User } from "../models/User";

export class UserRepo {
    async fetchAll() {
        return await User.find().sort({createdAt : 1}).lean();
    }

    async editUser(data : any) {
        return await User.findOneAndUpdate(
            {email : data.email},
            {$set : data},
            {new : true}
        )
    }

    async deleteUser(data : any) {
        return await User.findOneAndDelete({email : data});
    }
}