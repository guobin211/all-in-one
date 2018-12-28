import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { NextFunction } from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import logger from 'morgan';
import path from 'path';

/**
 *  import router class
 */
import { UserRouter } from './routes/user.router';


/**
 * build routers
 */
const userRoutes = new UserRouter();


/**
 * express server
 */
class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.initConfig();
        this.mountRouting();
    }

    /**
     * express app mid config
     */
    private initConfig(): void {
        const MONGO_URL = 'mongodb://localhost/node-mongo';
        mongoose.connect(MONGO_URL || process.env.MONGODB_URL, { useNewUrlParser: true });
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
        this.app.use(logger('dev'));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        this.app.use(express.static(path.join(__dirname, 'public'),
            {
                maxAge: 31557600000
            }));
        /**
         * set header
         */
        this.app.use((req: express.Request, res: express.Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Methods',
                'GET, POST, PUT, DELETE, OPTIONS'
            );
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'
            );
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }

    /**
     * mount routing
     */
    private mountRouting(): void {
        const router: express.Router = express.Router();
        this.app.use('/', router);
        this.app.use('/user', userRoutes.router);
    }

}

export default new Server().app;
