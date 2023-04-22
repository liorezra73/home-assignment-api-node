import express,{Application,Request,Response,NextFunction} from "express";
import userRoute from "./routes/userRoute";
import BusinessError from "./models/errors/BusinessError";
var cors = require("cors");


const app: Application = express();
app.use(cors());
app.use(express.json());


app.use("/api/users", userRoute);


app.use((err:BusinessError, req:Request, res:Response, next:NextFunction) => {
    res.status(err.code).send(err.message);
  });
  process.env.PORT='4000';
  const port = process.env.PORT ?? 4000;

  app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
  });
  