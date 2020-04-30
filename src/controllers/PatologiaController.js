
const Patologia = require('../models/Patologia');
const Medicamentos=require('../models/Medicamentos');

module.exports = {
    async index(req, res) {
        const patologia = await patologia.findAll();

        return res.json(categorias);
    },

    async store(req, res) {
        const {medicamentos_id}=req.params;
        const { name } = req.body;

        const medicamentos= await Medicamentos.findByPk(medicamentos_id);
        const patologia = await patologia.create({ name });

        await medicamentos.addPatologia(patologia);
        return res.json(patologia);
    },
    async destroy(req, res) {
      const {medicamentos_id}=req.params;
      const {name}=req.body;

      const medicamentos=await Medicamentos.findByPk(medicamentos_id);
      const patologia =await Patologia.findOne({
          where:{name}
      });
      await medicamentos.removePatologia(patologia);

        return res.json();
    },
    async update(req, res) {

        const patologia= await Patologia.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json();
    }
};