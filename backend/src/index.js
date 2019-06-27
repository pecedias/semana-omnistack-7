const express = require('express'); // Permite lidar com rotas, parâmetros e respostas para nossos clientes
const mongoose = require('mongoose'); // Manipular e criar base de dados do mongo
const path = require('path');
const cors = require('cors');

const app = express(); // Essa função cria um servidor e poderá ser acessado pelo navegador

// Divisão do servidor para suportar tanto HTTP quanto WEBSOCKET(comunicação em realtime)
const server = require('http').Server(app);
const io = require('socket.io')(server); // Conexões HTTP e WEBSOCKET

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb+srv://semana:semana@cluster0-bkvch.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
});

app.use((req, res, next) => { // Middlewares são interceptadores
    req.io = io;

    next(); // Permite que essa rota seja executada e as próximas também
});

app.use(cors()); // Permitir que todos endereços(URLs) acessem o backend

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized'))); // Rota para acessar arq estático(imagen)

app.use(require('./routes')); // Separar as rotas da app

server.listen(3333); // Definindo a porta para acessar a aplicação


