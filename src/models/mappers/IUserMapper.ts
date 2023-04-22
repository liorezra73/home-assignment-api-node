import User from "../../dal/models/User";
import IUser from "../common/IUser";

export default interface IUserMapper{
    mapToModel: (user: User)=> IUser ;
    mapToDbModel:  (user: IUser)=>any ;
}