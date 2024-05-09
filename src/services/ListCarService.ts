import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListCarService {
  async execute(): Promise<any[]> {
    try {
      // Busca os 10 primeiros documentos da coleção "Measurements"
      const measurements = await prisma.measurement.findMany();
      return measurements;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}

export { ListCarService };
