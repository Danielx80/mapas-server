const Marcadores = require("./marcadores");


class Sockets {

    constructor( io ) {

        this.io = io;
        this.marcadores = new Marcadores();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            //  TODO: Marcadores - activos 
            socket.emit('marcadores-activos', this.marcadores.activos),

            // TODO: marcadores - nuevo
            socket.on('marcador-nuevo', ( marcador ) => {
                this.marcadores.agregarMarcador(marcador);

                socket.broadcast.emit('marcador-nuevo', marcador)
            })

            // TODO: maracdor - actualizado 
            socket.on('marcador-actualizado', ( marcador ) => {

                this.marcadores.acutalizarMarcador( marcador );

                socket.broadcast.emit('marcador-actualizado', marcador)
            })
        });
    }


}


module.exports = Sockets;