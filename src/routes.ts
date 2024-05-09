import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { ListCarController } from "./controllers/ListCarController";
import { ListGeoController } from "./controllers/ListGeoController";
import { ListGeoCitiesController } from "./controllers/ListGeoCitiesController";
import { ListFilesController } from "./controllers/ListFilesController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions)
{
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomersController().handle(request, reply)
    })

    fastify.delete("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply)
    }) 

    fastify.get("/measurements", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCarController().handle(request, reply)
    })

    fastify.get("/geodata", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListGeoController().handle(request, reply)
    })

    fastify.get("/geocities", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListGeoCitiesController().handle(request, reply)
    })

    fastify.get("/videofiles", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListFilesController().handle(request, reply)
    })
            
            
           
            
}