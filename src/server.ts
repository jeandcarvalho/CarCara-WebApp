import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

const start = async () => {
    await app.register(cors);
    await app.register(routes);

    try {
        // Configure o servidor para ouvir em todos os endereços disponíveis
        await app.listen({ port: 8080, host: '0.0.0.0' });
        console.log(`Servidor rodando em http://0.0.0.0:3333`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
