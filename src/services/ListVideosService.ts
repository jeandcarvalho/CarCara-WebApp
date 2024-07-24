import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ListVideosService {
  async execute(page: number, pageSize: number, searchString?: string): Promise<any[]> {
    try {
      let filter: Prisma.VideoFilesWhereInput = {};

      if (searchString) {
        const newStr = searchString.replace(/_/g, " ");
        const parts = newStr.split("!");

        console.log("Search String Parts:", parts);

        // Divida as partes, preenchendo com arrays vazios quando não houver partes suficientes
        const areas = parts[0]?.split("-").filter(item => item.trim() !== "") || [];
        const traffic = parts[1]?.split("-").filter(item => item.trim() !== "") || [];
        const roadType = parts[2]?.split("-").filter(item => item.trim() !== "") || [];
        const weather = parts[3]?.split("-").filter(item => item.trim() !== "") || [];
        const period = parts[4]?.split("-").filter(item => item.trim() !== "") || [];
        const others = parts[5]?.split("-").filter(item => item.trim() !== "") || [];

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
      const filesdatas = await prisma.videoFiles.findMany({
        where: filter,
        skip: skip,
        take: pageSize
      });

      console.log("Files Data:", filesdatas);

      return filesdatas;
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}

export { ListVideosService };
