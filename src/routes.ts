import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ListFilesController } from "./controllers/ListFilesController";
import { ListCarController } from "./controllers/ListCarController";
import { ListGeoController } from "./controllers/ListGeoController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions)
{
    fastify.get("/videofiles", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListFilesController().handle(request, reply)
    })         

    fastify.get("/measurements", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCarController().handle(request, reply)
    })

    fastify.get("/geodata", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListGeoController().handle(request, reply)
    })
}