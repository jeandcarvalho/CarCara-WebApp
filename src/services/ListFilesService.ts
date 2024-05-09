import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListFilesService {
  async execute(): Promise<any[]> {
    try {
      // Busca os 10 primeiros documentos da coleção "Measurements"
      const filesdatas = await prisma.filesMenu.findMany();
      return filesdatas;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}

export { ListFilesService };
