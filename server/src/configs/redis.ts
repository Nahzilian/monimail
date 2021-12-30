import * as redis from 'redis'

const client = redis.createClient({ host:'Monimail', port: 6379 } as Omit<redis.RedisClientOptions<never, Record<string, never>>, "modules">)

export const connectRedis = async () => {
    client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();
}

export default client