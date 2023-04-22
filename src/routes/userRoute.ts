import express,{Request,Response,NextFunction} from "express";
import { createValidator } from "express-joi-validation";
import { UserRequestSchema, userSchema } from "../schemas/userSchema";
import { ValidatedRequest } from "express-joi-validation";
import userService from "../services/userService";

const userRouter = express.Router();
const validator = createValidator();

userRouter.post('/',[validator.body(userSchema)],async (req:ValidatedRequest<UserRequestSchema>,res:Response,next:NextFunction):Promise<void>=>{
try {
    const isCreated = await userService.create(req.body);
    res.status(isCreated?201:200).send({ok:true, isCreated:isCreated});
} catch (error) {
    next(error);
}
})

userRouter.get('/',async (req:Request, res:Response, next:NextFunction)=>{
    try {
         const users = await userService.get();
        res.status(200).json(users);
    } catch (error) {
        next(error)
    }
})

userRouter.put('/:username',[validator.body(userSchema)],async (req:ValidatedRequest<UserRequestSchema>,res:Response,next:NextFunction):Promise<void>=>{
    try {
        const isCreated = await userService.update(req.body);
        res.status(isCreated?201:200).send({ok:true, isCreated:isCreated});
    } catch (error) {
        next(error);
    }
})

userRouter.delete('/:username',async (req:Request, res:Response, next:NextFunction)=>{
    try {
        const {username} = req.params;
        await userService.delete(username);
        res.status(200).send({isOk:true});
    } catch (error) {
        next(error)
    }
})


export default userRouter;
