import express, { Request, Response, NextFunction, Router } from 'express';
import 'express-async-errors' //tratamento de erros no servidor
import cors from 'cors';

//importação do objeto router do arquivo routes
import { router } from './routes';

const app = express(); //app vai executar a aplicação sobre o express

app.use(express.json()); //define o formato de dados para json
app.use(router); //concede acesso as rotas do arquivo routes.ts
app.use(cors);

//middleware para tratamento de erros na rotas
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    //verificação se o conteúdo do parâmetro err é um erro(tipo Error)
    if (err instanceof Error) {
        //retorna HTTP Code 400 e uma mensagem
        return res.status(400).json({
            error: err.message
        })
    }

    /* caso não seja um erro na requisição, mas um erro no servidor
     será retornado um status code 500, Erro interno */
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error.'
    })
})

app.listen(3333, () => console.log('Servidor ON'));