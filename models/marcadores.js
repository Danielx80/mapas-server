class Marcadores {

    constructor(){

        this.activos = {};
    }

    // Metodo para agregar un marcador 
    agregarMarcador( marcador ){
        this.activos[ marcador.id ] = marcador;
        return marcador;
    }
 
    // Metodo para remoer un marcador
    removerMarcador( id ){
        delete this.activos[ id ];
    }

    // Metodo para actualizar marcador 
    acutalizarMarcador( marcador ){
        this.activos[ marcador.id ] = marcador;
        
    }
}


module.exports = Marcadores;