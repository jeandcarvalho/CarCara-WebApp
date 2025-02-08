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
exports.CreateCarService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateCarService {
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({}) {
            // console.log("Rota foi chamada");
            const car = yield prisma_1.default.measurement.create({
                data: {
                    id: "erer33r3",
                    TimeStemp: new Date(),
                    VideoName: "ew",
                    Gps_Y: 34,
                    Gps_X: 434,
                    Gps_Z: 434.5,
                    WheelAngle: 44,
                    VehicleSpeed: 564,
                    Curves: "fdf",
                    CamType: "fdf",
                    VehicleType: "gfg"
                }
            });
            return car;
        });
    }
}
exports.CreateCarService = CreateCarService;
