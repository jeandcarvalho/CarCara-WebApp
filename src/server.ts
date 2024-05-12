import Fastify from 'fastify';
import { routes } from './routes';
import cors from '@fastify/cors';

const app = Fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});

// Lista de IPs permitidos
const allowedIPs = ['44.226.145.213', '54.187.200.255', '34.213.214.55', '35.164.95.156', '44.230.95.183', '44.229.200.200'];

// Registre o plugin fastify-cors
app.register(cors, {
    origin: false, // Desativa o CORS, pois vamos fazer a verificação manualmente
});

// Middleware para verificar o IP e permitir ou negar a solicitação
app.addHook('onRequest', (request, reply, done) => {
    let clientIP: string | undefined;
    const forwardedFor = request.headers['x-forwarded-for'];
    if (forwardedFor) {
        // Se o cabeçalho x-forwarded-for existe, pegue o primeiro endereço IP da lista
        if (Array.isArray(forwardedFor)) {
            clientIP = forwardedFor[0];
        } else {
            clientIP = forwardedFor;
        }
    }
    if (clientIP && allowedIPs.includes(clientIP)) {
        // IP permitido, continue com a solicitação
        done();
    } else {
        // IP não permitido, envie uma resposta de erro
        reply.code(403).send({ message: 'Acesso proibido.' });
    }
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
