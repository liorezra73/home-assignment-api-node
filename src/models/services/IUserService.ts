import IUser from "../common/IUser";

export default interface IUserService{
    get: () => Promise<IUser[]>;
    create: (user: IUser) => Promise<boolean>;
    update: (user: IUser) => Promise<boolean>;
    delete: (username: string) => Promise<void>;
}