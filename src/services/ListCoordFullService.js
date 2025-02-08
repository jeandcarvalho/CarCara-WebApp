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
exports.ListCoordFullService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ListCoordFullService {
    execute(page, pageSize, searchString) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const skip = (page - 1) * pageSize;
                const where = searchString ? { FileName: { contains: searchString } } : {};
                const filesdatas = yield prisma.coordinatesMap.findMany({
                    where,
                    skip,
                    take: pageSize,
                });
                return filesdatas;
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
                return [];
            }
        });
    }
}
exports.ListCoordFullService = ListCoordFullService;
