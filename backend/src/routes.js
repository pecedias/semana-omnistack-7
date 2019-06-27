const express = require('express');
const multer = require('multer'); 
const uploadConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = new express.Router(); 
// A Configuração do multer permite que express entenda o corpo que enviamos através do Insomnia(arq físico, texto, etc...)
const upload = multer(uploadConfig); // Rota para upload de Posts

// Toda função que recebe dois param. req e res é um middleware
// routes.post('/posts', (req, res) => {
//    return res.send(`Hello ${req.query.name}`);
// });

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);

module.exports = routes;