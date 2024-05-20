
function verificarUsuario(req, res, next){

     
    const usuarioId = req.params.id || req.body.id_usuario || req.params.id_usuario;

    if(req.usuarioId !== usuarioId){
        //console.log(req.usuarioId);
        //console.log(req.params.id, req.body.id_usuario, req.params.id_usuario );
        return res.status(401).json({message: "Ação não autorizada!!!"});
    }
    next();
    
    
}

module.exports = verificarUsuario;