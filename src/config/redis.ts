import { createClient } from 'redis';

export const redisClient = createClient({
    url: process.env.REDIS_URL
});

const connectRedis = async () => {
    console.log(process.env.REDIS_URL);
    redisClient.on('error', (err) => {
        console.log("from on error")
        console.log(err);
        console.log(err.message);
        process.exit(1);
    });
    try {
        await redisClient.connect();
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
    console.log("Radis client connected");
};

export default connectRedis;