import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCoordFullService } from '../services/ListCoordFullService';

class ListCoordFullController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { page = 1, pageSize = 10, searchString } = request.query as { page?: number, pageSize?: number, searchString?: string };
    const listCoordService = new ListCoordFullService();
    const files = await listCoordService.execute(Number(page), Number(pageSize), searchString);
    reply.send(files);
  }
}

export { ListCoordFullController };