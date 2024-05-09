import mongoose, { Document, Schema } from 'mongoose';

// Definindo o esquema do modelo
const MeasurementSchema = new Schema({
  _id: String,
  VideoName: String,
  TimeStamp: Date,
  Gps_Y: Number,
  Gps_X: Number,
  Gps_Z: Number,
  WheelAngle: Number,
  VehicleSpeed: Number,
  Curves: String,
  CamType: String,
  VehicleType: String,
});

// Definindo o modelo com base no esquema
const MeasurementModel = mongoose.model<MeasurementDocument>('Measurement', MeasurementSchema);

// Interface para representar os documentos do MongoDB
interface MeasurementDocument extends Document {
  _id: string;
  VideoName: string;
  TimeStamp: Date;
  Gps_Y: number;
  Gps_X: number;
  Gps_Z: number;
  WheelAngle: number;
  VehicleSpeed: number;
  Curves: string;
  CamType: string;
  VehicleType: string;
}

export { MeasurementModel, MeasurementDocument };
