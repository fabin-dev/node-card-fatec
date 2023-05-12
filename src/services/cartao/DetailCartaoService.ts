//* Libraries imports

//* Local imports
import p from "../../../prisma";

class DetailCartaoService {
  async execute(cartao_id: string) {
    const cartao = await p.cartao.findFirst({
      where: {
        id: cartao_id,
      },
      select: {
        id: true,
        num_cartao: true,
        cvv: true,
      },
    });

    return "Compra Autorizada";
  }
}

export { DetailCartaoService };
