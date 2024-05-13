import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { ListFilesController } from "./controllers/ListFilesController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions)
{
    fastify.get("/videofiles", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListFilesController().handle(request, reply)
    })         
}