import userMapper from "../../mappers/userMapper";
import IUser from "../../models/common/IUser";
import IUserRepository from "../../models/repositories/IUserRepository";
import User from "../models/User";

const userRepository:IUserRepository = {
    get:async function (): Promise<IUser[]> {
      const users = await User.findAll();
      return users.map(u=>{
         return userMapper.mapToModel(u)
      })
    },
    getByUsername:async function (username: string): Promise<IUser | null> {
       const user = await User.findByPk(username)
       if (!user)
         return null;
       return userMapper.mapToModel(user);
    },
    create:async function (user: IUser): Promise<void> {
        const tmpUser = userMapper.mapToDbModel(user);
        const userDb = await User.build({...tmpUser});
        await userDb.save();
    },
    update:async function (user: IUser): Promise<void> {
        const userDb = await User.findByPk(user.username) as User;
        const tmpUser = userMapper.mapToDbModel(user);
        await userDb.update({...tmpUser})
        
    },
    delete:async function (username: string): Promise<void> {
        const user = await User.findByPk(username) as User;
        await user.destroy()

    }
}

export default userRepository;