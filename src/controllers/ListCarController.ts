import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCarService } from '../services/ListCarService';

class ListCarController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCarsService = new ListCarService();
        const measurements = await listCarsService.execute();
        reply.send(measurements);
    }
}

export { ListCarController }