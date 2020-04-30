
const Categorias = require('../models/Categoria');

module.exports = {
    async index(req, res) {
        const categorias = await categorias.findAll();

        return res.json(categorias);
    },

    async store(req, res) {
        const { name } = req.body;

        const categorias = await Categorias.create({ name });

        return res.json(categorias);
    },
    async destroy(req, res) {

        await Categorias.deleteOne({ _id: req.params.id });

        return res.json();
    },
    async update(req, res) {

        const categorias = await Categorias.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json();
    }
};