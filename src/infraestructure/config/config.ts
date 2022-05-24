import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, "../../../.env") });

interface ENV {
    DATABASE_USER: string | undefined;
    DATABASE_PASSWORD: string | undefined;
    DATABASE_NAME: string | undefined;
    DATABASE_HOST: string | undefined;
    DATABASE_PORT: string | undefined;
    SENDGRID_API_KEY: string | undefined;
    PORT: string | undefined;
}

interface config {
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    DATABASE_NAME: string;
    SENDGRID_API_KEY: string;
    DATABASE_HOST: string;
    DATABASE_PORT: string;
    PORT: string;
}

const getConfig = (): ENV => {
    return {
        DATABASE_USER: process.env.DATABASE_USER,
        DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
        DATABASE_NAME: process.env.DATABASE_NAME,
        DATABASE_HOST: process.env.DATABASE_HOST,
        DATABASE_PORT: process.env.DATABASE_PORT,
        SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
        PORT: process.env.PORT,
    }
}

const config = getConfig();

export default config;

// TODO: Validate missing enviroment variables
// const getSanitzedConfig = (config: ENV): Config => {
//     for (const [key, value] of Object.entries(config)) {
//       if (value === undefined) {
//         throw new Error(`Missing key ${key} in config.env`);
//       }
//     }
//     return config as Config;
//   };
// const sanitizedConfig getSanitzedConfig(config);
// export default sanitizedConfig;
