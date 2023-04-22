import BusinessError from "./BusinessError";

export default class UserNotExistsError extends BusinessError{
    constructor(username:string){
        super(404,`user ${username} not exists`)
    }
}