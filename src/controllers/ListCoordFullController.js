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
exports.ListCoordFullController = void 0;
const ListCoordFullService_1 = require("../services/ListCoordFullService");
class ListCoordFullController {
    handle(request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            const { page = 1, pageSize = 10, searchString } = request.query;
            const listCoordService = new ListCoordFullService_1.ListCoordFullService();
            const files = yield listCoordService.execute(Number(page), Number(pageSize), searchString);
            reply.send(files);
        });
    }
}
exports.ListCoordFullController = ListCoordFullController;
