"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const ListFilesController_1 = require("./controllers/ListFilesController");
const ListCarController_1 = require("./controllers/ListCarController");
const ListGeoController_1 = require("./controllers/ListGeoController");
const ListCoordController_1 = require("./controllers/ListCoordController");
const ListVehicleController_1 = require("./controllers/ListVehicleController");
const ListVideosController_1 = require("./controllers/ListVideosController");
const HomeController_1 = require("./controllers/HomeController");
const ListCounterController_1 = require("./controllers/ListCounterController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/videofiles", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListFilesController_1.ListFilesController().handle(request, reply);
        }));
        fastify.get("/measurements", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCarController_1.ListCarController().handle(request, reply);
        }));
        fastify.get("/geodata", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListGeoController_1.ListGeoController().handle(request, reply);
        }));
        fastify.get("/coordinates", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCoordController_1.ListCoordController().handle(request, reply);
        }));
        fastify.get("/vehicle", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListVehicleController_1.ListVehicleController().handle(request, reply);
        }));
        fastify.get("/videofiless", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListVideosController_1.ListVideosController().handle(request, reply);
        }));
        fastify.post("/homecounter", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new HomeController_1.HomeController().handle(request, reply);
        }));
        fastify.get("/counter", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCounterController_1.ListCounterController().handle(request, reply);
        }));
        fastify.get("/speed", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListCounterController_1.ListCounterController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
