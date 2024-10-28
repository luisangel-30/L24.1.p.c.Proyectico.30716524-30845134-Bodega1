import Cl_vBodega from "./Cl_vBodega.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_controlador {
    constructor() {
        this.Cl_mBodega = new Cl_mBodega();
        this.Cl_vBodega = new Cl_vBodega(this);
        this.Cl_vCliente = new Cl_vCliente(this);
    

    let btnInicializar = document.getElementById("inicializarBodega");
        btnInicializar.onclick = () => this.inicializarBodega();
    }

    inicializarBodega() {
        let inicial10 = document.getElementById("inicial10").value;
        let inicial20 = document.getElementById("inicial20").value;
        let inicial50 = document.getElementById("inicial50").value;

        this.Cl_mBodega.inicial10 = +inicial10;
        this.Cl_mBodega.inicial20 = +inicial20; 
        this.Cl_mBodega.inicial50 = +inicial50; 

        this.Cl_mBodega.contBilletes10 = this.Cl_mBodega.inicial10;
        this.Cl_mBodega.contBilletes20 = this.Cl_mBodega.inicial20;
        this.Cl_mBodega.contBilletes50 = this.Cl_mBodega.inicial50;

        this.Cl_vBodega.mostrarBilletesIniciales(
            this.Cl_mBodega.inicial10,
            this.Cl_mBodega.inicial20,
            this.Cl_mBodega.inicial50
        );
        this.Cl_vBodega.ocultarInicializacion();
}

    mostrarVistasCliente() {
        this.Cl_vBodega.ocultar();
        this.Cl_vCliente.mostrar();
    }
    mostrarVistasBodega() {
        this.Cl_vCliente.ocultar();
        this.Cl_vBodega.mostrar();
    }
 
    agregarCliente(cedula, denominacion, cantidad,edad) {
        let cliente = new Cl_mCliente(cedula, denominacion, cantidad, edad);
        this.Cl_mBodega.procesarCliente(cliente);
        this.Cl_vBodega.reportarCliente({
            cedula: cliente.cedula,
            denominacion: cliente.denominacion,
            cantidad: cliente.cantidad,
            edad: cliente.edad,
            montoTotal: cliente.montoTotal(),
            billete10: this.Cl_mBodega.billete10(),
            billete20: this.Cl_mBodega.billete20(),
            billete50: this.Cl_mBodega.billete50(),
            montoFinal: this.Cl_mBodega.montoFinal(),
            porcentaje50: this.Cl_mBodega.porcentaje50(),
            porcentajeclimayores: this.Cl_mBodega.porcentajeclimayores(),
            
        });
        this.mostrarVistasBodega();
    }
    
}