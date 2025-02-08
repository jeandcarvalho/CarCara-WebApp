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
exports.ListVideosService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class ListVideosService {
    execute(page, pageSize, searchString) {
        var _a, _b, _c, _d, _e, _f;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let filter = {};
                if (searchString) {
                    const newStr = searchString.replace(/_/g, " ");
                    const parts = newStr.split("!");
                    console.log("Search String Parts:", parts);
                    // Divida as partes, preenchendo com arrays vazios quando não houver partes suficientes
                    const areas = ((_a = parts[0]) === null || _a === void 0 ? void 0 : _a.split("-").filter(item => item.trim() !== "")) || [];
                    const traffic = ((_b = parts[1]) === null || _b === void 0 ? void 0 : _b.split("-").filter(item => item.trim() !== "")) || [];
                    const roadType = ((_c = parts[2]) === null || _c === void 0 ? void 0 : _c.split("-").filter(item => item.trim() !== "")) || [];
                    const weather = ((_d = parts[3]) === null || _d === void 0 ? void 0 : _d.split("-").filter(item => item.trim() !== "")) || [];
                    const period = ((_e = parts[4]) === null || _e === void 0 ? void 0 : _e.split("-").filter(item => item.trim() !== "")) || [];
                    const others = ((_f = parts[5]) === null || _f === void 0 ? void 0 : _f.split("-").filter(item => item.trim() !== "")) || [];
                    console.log("Areas:", areas);
                    console.log("Traffic:", traffic);
                    console.log("Road Type:", roadType);
                    console.log("Weather:", weather);
                    console.log("Period:", period);
                    console.log("Others:", others);
                    filter = {
                        AND: [
                            areas.length > 0 ? { AND: areas.map(area => ({ Area: { contains: area } })) } : {},
                            traffic.length > 0 ? { AND: traffic.map(t => ({ Traffic: { contains: t } })) } : {},
                            roadType.length > 0 ? { AND: roadType.map(rt => ({ RoadType: { contains: rt } })) } : {},
                            weather.length > 0 ? { AND: weather.map(w => ({ Weather: { contains: w } })) } : {},
                            period.length > 0 ? { AND: period.map(p => ({ Period: { contains: p } })) } : {},
                            others.length > 0 ? { AND: others.map(o => ({ Misc: { contains: o } })) } : {}
                        ].filter((condition) => Object.keys(condition).length > 0)
                    };
                    console.log("Filter:", JSON.stringify(filter, null, 2));
                }
                const skip = (page - 1) * pageSize;
                const filesdatas = yield prisma.videoFiles.findMany({
                    where: filter,
                    skip: skip,
                    take: pageSize
                });
                console.log("Files Data:", filesdatas);
                return filesdatas;
            }
            catch (error) {
                console.error('Erro ao buscar dados:', error);
                return [];
            }
        });
    }
}
exports.ListVideosService = ListVideosService;
