var listaClientesEx = ["Manuel", "Rocio"];
        
        var cajeroAutomatico = {
            empresa: "BBVA",
            moneda: "Euros",
            tamano: "1.60x1",
            dinero: 4000,
            listaClientes: listaClientesEx,
            localizacion: "Paseo de las acacias 23",
            fnAdminAnadirDinero: function(cantidad) {
                this.dinero += cantidad;
            },
            fnAdminRetirarDinero: function(cantidad) {
                this.dinero -= cantidad;
            },
            fnAdminAgregarCliente: function(nombre) {
                this.listaClientes.push(nombre);
            },
            fnAdminBorrarCliente: function(nombre) {
                for(var i = 0; i < listaClientes; i++) {
                    
                }
                this.listaClientes.slice()
            },
            fnLocalizaCliente: function(nombre) {
                for(var i = 0; i < listaClientes; i++) {
                    if(this.listaClientes[i] === nombre) {
                        return i;
                    }
                }
                return -1;
            },
            fnExisteCliente: function(nombre) {
                if(this.fnLocalizaCliente(nombre)) {
                    
                }
            },
            fnClienteAnadirDinero: function(cantidad) {
                this.dinero += cantidad;
            },
            fnClienteRetirarDinero: function(cantidad) {
                this.dinero -= cantidad;
            },
            fnValidaCliente: function(nombreCliente) {
                
            },
            fnValidaCliente: function(nombreCliente) {
                
            }
        }