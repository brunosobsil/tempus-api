class UsuarioController {
    
    obterUsuario(req, res){
        
        if(req.params.id){
           // Obter usuario por ID 
           res.send('obter usuario por id')
        }else{
            // Obter todos os usuarios
            res.send('obter usuarios')
        }
        
    }

    incluirUsuario(req, res){
        res.send('incluir usuario')
    }

    alterarUsuario(req, res){
        res.send('alterar usuario')
    }

    ativarDesativarUsuario(req, res){
        res.send('ativar/desativar usuario')
    }

}

module.exports = UsuarioController;