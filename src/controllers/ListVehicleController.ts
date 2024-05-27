import { FastifyRequest, FastifyReply } from 'fastify';
import { ListVehicleService } from '../services/ListVehicleService';

class ListVehicleController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { page = 1, pageSize = 10, searchString } = request.query as { page?: number, pageSize?: number, searchString?: string };
    const listVehicleService = new ListVehicleService();
    const files = await listVehicleService.execute(Number(page), Number(pageSize), searchString);
    reply.send(files);
  }
}

export { ListVehicleController };