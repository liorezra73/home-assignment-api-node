import IUser from "../common/IUser";

export default interface IUserRepository {
  get: () => Promise<IUser[]>;
  getByUsername: (username: string) => Promise<IUser | null>;
  create: (user: IUser) => Promise<void>;
  update: (user: IUser) => Promise<void>;
  delete: (username: string) => Promise<void>;
}
