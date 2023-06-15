import express, {Express, Request, Response} from "express";
import morgan from "morgan";
import helmet from "helmet";
import compression from "compression";

const app: Express = express();

// init middlewares
app.use(morgan('common'));
app.use(helmet()); // avoid to track the technology to call APIs "X-Powered-By: Express"
app.use(compression())
// init db

// routes
app.get('/healthCheck', (req: Request, res: Response) => {
    res.status(200).json({
        status: "OK"
    })
})

export default app;