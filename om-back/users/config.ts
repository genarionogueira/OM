import dotenv from "dotenv";
dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

interface IConfig {
    PORT: number;
    NODE_ENV: string;
    APP_SECRET: string;
    MONGODB_STR: string;
    JWTTOKEN_TIME: string;
    ADMIN_USERS: string[];
}

const config:IConfig = {
    PORT:parseInt(process.env.APP_PORT as string)?? 3000,
    NODE_ENV:process.env.NODE_ENV??'development',
    APP_SECRET:process.env.APP_SECRET??'',
    MONGODB_STR:process.env.MONGODB_STR??'',
    JWTTOKEN_TIME:process.env.JWTTOKEN_TIME??'',
    ADMIN_USERS:(process.env.ADMIN_USERS??'').split(','),
}

export {config as default};
