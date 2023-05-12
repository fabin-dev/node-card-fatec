import prismaClient from "../../../prisma";

class DetailCartaoService {

    async execute(cartao_id: string) {
        const cartao = await prismaClient.cartao.findFirst({
            where: {
                id: cartao_id
            },
            select: {
                id: true,
                num_cartao: true,
                cvv: true,
            }

        })

        return 'Compra Autorizada'

    }

}

export { DetailCartaoService }