"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const mongoose_1 = __importDefault(require("mongoose"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const user_router_1 = require("./routes/user.router");
const userRoutes = new user_router_1.UserRouter();
class Server {
    constructor() {
        this.app = express_1.default();
        this.initConfig();
        this.mountRouting();
    }
    initConfig() {
        const MONGO_URL = 'mongodb://localhost/node-mongo';
        mongoose_1.default.connect(MONGO_URL || process.env.MONGODB_URL, { useNewUrlParser: true });
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use(cookie_parser_1.default());
        this.app.use(morgan_1.default('dev'));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        this.app.use(express_1.default.static(path_1.default.join(__dirname, 'public'), {
            maxAge: 31557600000
        }));
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });
    }
    mountRouting() {
        const router = express_1.default.Router();
        this.app.use('/', router);
        this.app.use('/user', userRoutes.router);
    }
}
exports.default = new Server().app;
