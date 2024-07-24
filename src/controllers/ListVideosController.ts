import { FastifyRequest, FastifyReply } from 'fastify';
import { ListVideosService } from '../services/ListVideosService';

class ListVideosController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { page = 1, pageSize = 10, searchString } = request.query as { page?: number, pageSize?: number, searchString?: string };
        const listVideosService = new ListVideosService();
        const geo = await listVideosService.execute(Number(page), Number(pageSize), searchString);
        reply.send(geo);
    }
}

export { ListVideosController }