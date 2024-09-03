import mongoose, {mongo} from "mongoose";

async function connectNaDatabase() {
    
    mongoose.connect(process.env.DB_CONNECTION_STRING);//acrescentou a variavel de ambiente dentro do parametro do metodo

    return mongoose.connection;
}; //foi criado uma intacao e os dados ja ficaram salvos na criacao da variavel conexao que esta no arquivo app.js

export default connectNaDatabase;
