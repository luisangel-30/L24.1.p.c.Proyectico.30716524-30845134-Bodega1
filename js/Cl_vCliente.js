export default class Cl_vCliente {
    constructor(controlador) {
        this.vista = document.getElementById("cliente");
        this.cedula = document.getElementById("cliente_Cedula");
        this.denominacion = document.getElementById("cliente_Denominacion");
        this.cantidad = document.getElementById("cliente_Cantidad");
        this.edad = document.getElementById("cliente_Edad");
        this.btAceptar = document.getElementById("cliente_Aceptar");
        
        this.btAceptar.onclick = () => {
            controlador.agregarCliente(
                this.cedula.value,
                this.denominacion.value,
                this.cantidad.value,
                this.edad.value,
            );
            this.ocultar();
        };

        this.ocultar();
    }

    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
}
