const asociacion = require('../models/asociacion');
const asociacionController = {};

asociacionController.index = async function  (req, res, next) {
    let asociaciones = await asociacion.find();
    return res.status(200).json(asociaciones);    
}

asociacionController.findAsociaciones = async function (req, res, next){
    let {id} = req.params;
    let asoc = await asociacion.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(asoc);
}

asociacionController.update = async function (req, res, next){
    let {id} = req.params;
    let asoc= {
        name: req.body.name,
        departamento: req.body.departamento,
        años: req.body.años
    }
    console.log(asoc);
    try{
        await asociacion.update({_id: id}, asoc);
        res.status(200).json({ok:true, message: "asociacion actualizada correctamente"});
    }
    catch(err){
        return res.status(500).json({ok:true, err: err, message: "no has insertado correctamente los datos"});
    }
}

asociacionController.create = async function(req,res, next){
    let asoc = new asociacion();
    asoc.name = req.body.name;
    asoc.departamento = req.body.departamento;
    asoc.años = req.body.años;
    try{
        await asoc.save();
        return res.status(200).json({ok:true, message: "se guardo con exito"})
    }
    catch(err){
        return res.status(500).json({ok:false, err: err, message: "no se pudo guardar, revisa los campos"});
    }
}

asociacionController.delete = async function(req, res, next){
    let {id} = req.params;
    await asociacion.remove({_id: id});
    res.status(200).json({ok:true, message: "asociacion borrada con exito"});
}

module.exports = asociacionController;