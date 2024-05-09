import prismaClient from "../prisma"

interface CreateCarProps {
    videoName: string;
    timeStamp: Date;
    gpsY: number;
    gpsX: number;
    gpsZ: number;
    wheelAngle: number;
    vehicleSpeed: number;
    curves: string;
    camType: string;
    vehicleType: string;
  }

class CreateCarService{
    async execute({}: CreateCarProps){ 
       // console.log("Rota foi chamada");
      

       const car = await prismaClient.measurement.create({
        data:{
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
       })
        return car
    }
}

export {CreateCarService}