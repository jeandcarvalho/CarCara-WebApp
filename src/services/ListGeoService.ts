import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListGeoService {
  async execute(): Promise<any[]> {
    try {
      // Busca os 10 primeiros documentos da coleção "Measurements"
      const geodatas = await prisma.geoData.findMany();
      return geodatas;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}

export { ListGeoService };
