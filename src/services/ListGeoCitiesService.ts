import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListGeoCitiesService {
  async execute(): Promise<any[]> {

      const geodatas = await prisma.geoMenu.findMany();
      return geodatas;

  }
}

export { ListGeoCitiesService };








