import prismaClient from "../../../prisma"
import {hash} from "bcryptjs"

//npx prisma db push
//npx prisma db pull

//npx prisma migrate dev toda vez q alterar algo no schema

//npx prisma studio pra ve os baguio

interface CartaoRequest {
    nome_titular: string;
    num_cartao: string;
    cvv: string;
    senha: string;
}

class CreateCartaoService {

    async execute({ nome_titular, num_cartao, cvv, senha }: CartaoRequest) {

        const senhaHash = await hash(senha, 8);
        const cvvHash = await hash(cvv, 8);

        const cartao = await prismaClient.cartao.create({
            data: {
                nome_titular: nome_titular,
                num_cartao: num_cartao,
                cvv: cvvHash,
                senha: senhaHash,
            },
            select: {
                id: true,
                num_cartao: true,
                cvv: true,
            }
        })

        return cartao;
    }

}

export { CreateCartaoService }