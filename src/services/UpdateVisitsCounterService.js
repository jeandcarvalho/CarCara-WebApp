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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVisitsCounterService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class UpdateVisitsCounterService {
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            // Verifica se já existe um registro para o contador de visitantes
            const visitsCounter = yield prisma_1.default.visiter.findUnique({
                where: { id: "unique id" } // Substitua "unique_id" pelo ID apropriado, se necessário
            });
            if (visitsCounter) {
                // Atualiza o contador de visitantes
                const updatedCounter = yield prisma_1.default.visiter.update({
                    where: { id: visitsCounter.id },
                    data: { visitantes: visitsCounter.visitantes + 1 }
                });
                return updatedCounter;
            }
            else {
                // Cria o registro se não existir
                const newCounter = yield prisma_1.default.visiter.create({
                    data: {
                        id: "unique id", // Substitua "unique_id" por um ID apropriado
                        visitantes: 123
                    }
                });
                return newCounter;
            }
        });
    }
}
exports.UpdateVisitsCounterService = UpdateVisitsCounterService;
