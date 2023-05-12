//* Libraries imports
import { Request, Response } from "express";

//* Local imports
import { CreateCartaoService } from "../../services/cartao/CreateCartaoService";

class CreateCartaoController {
  async handle(req: Request, res: Response) {
    const { nome_titular, num_cartao, cvv, senha } = req.body;

    const createCartaoService = new CreateCartaoService();
    const cartao = await createCartaoService.execute({
      nome_titular,
      num_cartao,
      cvv,
      senha,
    });

    return res.json(cartao);
  }
}

export { CreateCartaoController };
