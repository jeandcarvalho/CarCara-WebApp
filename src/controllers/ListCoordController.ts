import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCoordService } from '../services/ListCoordService';

class ListCoordController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { page = 1, pageSize = 10, searchString } = request.query as { page?: number, pageSize?: number, searchString?: string };
    const listCoordService = new ListCoordService();
    const files = await listCoordService.execute(Number(page), Number(pageSize), searchString);
    reply.send(files);
  }
}

export { ListCoordController };