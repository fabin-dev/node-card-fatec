//* Libraries imports
import { Request, Response } from "express";

//* Local imports
import { DetailCartaoService } from "../../services/cartao/DetailCartaoService";

class DetailCartaoController {
  async handle(req: Request, res: Response) {
    const cartao_id = req.cartao_id;
    const detailCartaoService = new DetailCartaoService();
    const cartao = await detailCartaoService.execute(cartao_id);

    return res.json(cartao);
  }
}

export { DetailCartaoController };
