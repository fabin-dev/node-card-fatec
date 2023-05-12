//* Libraries imports
import { Request, Response } from "express";

//* Local imports
import { AuthCartaoService } from "../../services/cartao/AuthCartaoService";

class AuthCartaoController {
  async handle(req: Request, res: Response) {
    const { num_cartao, cvv } = req.body;

    const authCartaoService = new AuthCartaoService();

    const auth = await authCartaoService.execute({
      num_cartao,
      cvv,
    });

    return res.json(auth);
  }
}

export { AuthCartaoController };