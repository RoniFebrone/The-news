const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');


const usuarioModel = require('./src/DB/module/usuario/usuario.model');
const noticiaModel = require('./src/DB/module/noticia/noticia.model');

const app = express();
app.use(express.json());
app.use(cors());


app.post('/login', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ message: ' o Campo email e obrigatorio' });
    }
    if (!req.body.senha) {
        return res.status(400).json({ message: ' o Campo email e obrigatorio' });
    }

    const usuarioExistente = await usuarioModel.findOne({ email: req.body.email });

    if (!usuarioExistente.length === 0) {
        return res.status(400).json({ message: 'Usuario nao esta cadastrado' })
    }

    const senhaVerificada = bcrypt.compareSync(
        req.body.senha,
        usuarioExistente.senha)

    if (!senhaVerificada) {
        return res.status(400).json({ message: 'Email ou Senha incorreta' })
    }
    const token = jwt.sign({ _id: usuarioExistente._id }, 'dnc');
    console.log(token);

    return res.status(200).json({
        message: ' Login realizado com sucesso',
        token
    })
})

app.get('/usuarios', async (req, res) => {
    const usuarios = await usuarioModel.find({})
    return res.status(200).json([usuarios])
})

app.post('/usuarios', async (req, res) => {
    if (!req.body.email) {
        return res.status(400).json({ message: ' o Campo email e obrigatorio' });
    }
    if (!req.body.senha) {
        return res.status(400).json({ message: ' o Campo email e obrigatorio' });
    }

    const usuarioExistente = await usuarioModel.find({ email: req.body.email });

    if (usuarioExistente.length) {
        return res.status(400).json({ message: 'Usuario ja existente' })
    }

    const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10)

    const usuario = await usuarioModel.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: senhaCriptografada
    });
    return res.status(201).json({ usuario, message: ' O usuario foi cadastrado' })
})

app.get('/noticias', async (req, res) => {
    let filterCategory = {};
    if (req.query.category) {
        console.log("Valor de category:", req.query.category); 
        filterCategory = {category: req.query.category};
    }
    const noticias = await noticiaModel.find(filterCategory)
    console.log(noticias) ; 
    return res.status(200).json(noticias);
})



app.post('/noticias', async (req, res) => {
    if (!req.body.title) {
        return res.status(400).json({message:'O campo titulo e obrigatorio'})
    }
    if (!req.body.img) {
        return res.status(400).json({message:'O campo imagem e obrigatorio'})
    }
    if (!req.body.text) {
        return res.status(400).json({message:'O campo texto e obrigatorio'})
    }
    if (!req.body.category) {
        return res.status(400).json({message:'O campo categoria e obrigatorio'})
    }

    const noticia = await noticiaModel.create({
        title:req.body.title,
        img:req.body.img,
        text:req.body.text,
        category:req.body.category,
    })
    return res.status(201).json(noticia)
})


app.listen(8080, () => {
    console.log('Servidor rodando na porta 8080');
});
