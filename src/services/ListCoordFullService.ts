import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

class ListCoordFullService {
  async execute(page: number, pageSize: number, searchString?: string): Promise<any[]> {
    try {
      const skip = (page - 1) * pageSize;
      const where: Prisma.CoordinatesMapWhereInput = searchString ? { FileName: { contains: searchString } } : {};
      const filesdatas = await prisma.coordinatesMap.findMany({
        where,
        skip,
        take: pageSize,
      });
      return filesdatas;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}

export {ListCoordFullService}