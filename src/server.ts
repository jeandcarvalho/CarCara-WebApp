import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

// Registre o plugin fastify-cors
app.register(cors, {
    origin: ['*'], // ou '*' para permitir de qualquer origem
    methods: ['GET'],
    allowedHeaders: ['Content-Type', 'Authorization'],
});

app.register(routes);

const start = async () => {
    try {
        await app.listen({ port: 3333 });
        console.log(`Servidor rodando`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

start();
