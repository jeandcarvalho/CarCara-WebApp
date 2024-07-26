import { FastifyRequest, FastifyReply } from 'fastify';
import { UpdateVisitsCounterService } from '../services/UpdateVisitsCounterService';

class HomeController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const visitsCounterService = new UpdateVisitsCounterService();
        const counter = await visitsCounterService.execute();
        reply.send({ message: 'Home page accessed', counter });
    }
}

export { HomeController };
