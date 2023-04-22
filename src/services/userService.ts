import userRepository from "../dal/repositories/userRepository";
import IUser from "../models/common/IUser";
import BusinessError from "../models/errors/BusinessError";
import UserNotExistsError from "../models/errors/UserNotExistsError";
import IUserService from "../models/services/IUserService";

const userService:IUserService ={
    get:async function (): Promise<IUser[]> {
        try {
            return await userRepository.get();
        } catch (error) {
            throw new BusinessError(500,"something went wrong...")
        }
    },
    create:async function (user: IUser): Promise<boolean> {
        try {
            const dbUser = await userRepository.getByUsername(user.username);
            if(!dbUser){
                await userRepository.create(user);
                return true;
            }
            else{
                await userRepository.update(user);
                return false;
            }
        } catch (error) {
            throw new BusinessError(500,"something went wrong...")
        }
    },
    update:async function (user: IUser): Promise<boolean> {
        try {
           return await this.create(user);
        } catch (error) {
            throw error;
        }
    },
    delete:async function (username: string): Promise<void> {
        try {
            const dbUser = await userRepository.getByUsername(username);
            if(!dbUser){
                throw new UserNotExistsError(username);
            }
            else{
                await userRepository.delete(username);
            }
        } catch (error) {
            const buErr = error as BusinessError;
            if(buErr)
              throw buErr;
            else
              throw new BusinessError(500,"something went wrong...");
        }
    }
}

export default userService;