import { FastifyRequest, FastifyReply } from 'fastify';
import { ListFilesService } from '../services/ListFilesService';

class ListFilesController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listFilesService = new ListFilesService();
        const geo = await listFilesService.execute();
        reply.send(geo);
    }
}

export { ListFilesController }