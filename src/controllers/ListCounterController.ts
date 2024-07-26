import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCounterService } from '../services/ListCounterService';

class ListCounterController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCarsService = new ListCounterService();
        const measurements = await listCarsService.execute();
        reply.send(measurements);
    }
}

export { ListCounterController }