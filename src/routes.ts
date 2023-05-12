//* Libraries imports
import { Router } from "express";

//* Middlewares imports
import { isAuthenticated } from "./middlewares/isAuthenticated";

//* Controllers imports
import { AuthCartaoController } from "./controllers/cartao/AuthCartaoController";
import { CreateCartaoController } from "./controllers/cartao/CreateCartaoController";
import { DetailCartaoController } from "./controllers/cartao/DetailCartaoController";

const router = Router();

router.post("/cartao", new CreateCartaoController().handle);
router.post("/cartaoAut", new AuthCartaoController().handle);
router.get(
  "/cartaoToken",
  isAuthenticated,
  new DetailCartaoController().handle
);

export { router };
