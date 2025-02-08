import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListFilesService {
  async execute(): Promise<any[]> {
    try {
      // Busca TODOS os documentos da coleção "filesMenu"
      const filesData = await prisma.filesProcessed.findMany({});
      return filesData;
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      return [];
    } finally {
      await prisma.$disconnect(); // Fecha a conexão com o banco
    }
  }
}

export { ListFilesService };
