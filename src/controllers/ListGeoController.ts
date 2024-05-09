import { FastifyRequest, FastifyReply } from 'fastify';
import { ListGeoService } from '../services/ListGeoService';

class ListGeoController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listGeodataService = new ListGeoService();
        const geo = await listGeodataService.execute();
        reply.send(geo);
    }
}

export { ListGeoController }