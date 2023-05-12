import { Router } from "express";
import { AuthCartaoController } from "./controllers/cartao/AuthCartaoController";
import { CreateCartaoController } from "./controllers/cartao/CreateCartaoController";
import { DetailCartaoController } from "./controllers/cartao/DetailCartaoController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router(); //crio uma instância do elemento Router

router.post('/cartao', new CreateCartaoController().handle)

router.post('/cartaoAut', new AuthCartaoController().handle)

router.get('/cartaoToken', isAuthenticated, new DetailCartaoController().handle)

//exportação do objeto router para acesso de outros arquivos
export { router };