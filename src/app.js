import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await connectNaDatabase();

conexao.on("erro", (erro) => {
    console.error("erro de conexão", erro)
}); //nesse metodo foi criado um parametro de erro, para receber um aviso caso a conexao nao de certo

conexao.once("open", () => {
    console.log("Conexao com o bano de dados ok")
} )

const app = express();
routes(app);
 
app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
});

export default app;

