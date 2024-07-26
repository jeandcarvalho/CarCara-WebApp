import prismaClient from "../prisma"

class UpdateVisitsCounterService {
    async execute() {
        // Verifica se já existe um registro para o contador de visitantes
        const visitsCounter = await prismaClient.visiter.findUnique({
            where: { id: "unique id" } // Substitua "unique_id" pelo ID apropriado, se necessário
        });

        if (visitsCounter) {
            // Atualiza o contador de visitantes
            const updatedCounter = await prismaClient.visiter.update({
                where: { id: visitsCounter.id },
                data: { visitantes: visitsCounter.visitantes + 1 }
            });
            return updatedCounter;
        } else {
            // Cria o registro se não existir
            const newCounter = await prismaClient.visiter.create({
                data: {
                    id: "unique id", // Substitua "unique_id" por um ID apropriado
                    visitantes: 123
                }
            });
            return newCounter;
        }
    }
}

export { UpdateVisitsCounterService };