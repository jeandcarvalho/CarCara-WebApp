import { FastifyRequest, FastifyReply } from 'fastify';
import { ListGeoCitiesService } from '../services/ListGeoCitiesService';

class ListGeoCitiesController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listGeodataService = new ListGeoCitiesService();
        const geo = await listGeodataService.execute();
        reply.send(geo);
    }
}

export { ListGeoCitiesController }