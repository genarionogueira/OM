import dotenv from "dotenv";
dotenv.config({
    path: `.env.${process.env.NOD_ENV}`
});

interface IConfig {
    APP_PORT: number;
    APP_NAME: string;
    NODE_ENV: string;
    MONGODB_STR: string;
}

const config: IConfig = {
    APP_PORT: parseInt(process.env.APP_PORT) ?? 3000,
    NODE_ENV: process.env.NODE_ENV ?? 'development',
    MONGODB_STR: process.env.MONGODB_STR ?? '',
    APP_NAME: process.env.APP_NAME ?? '',
}

export {config as default}
