export default class Cl_mBodega{
    constructor() {
        this.inicial10 = 0;
        this.inicial20 = 0;
        this.inicial50 = 0;
        this.contBilletes10 = 0; 
        this.contBilletes20 = 0; 
        this.contBilletes50 = 0;
        this.contclientes = 0;
        this.mayor = 0,0;
        this.contclimayor = 0; 
        
       
    }

    procesarCliente(cli) {
        let cantidadBilletes = cli.cantidad; 
        let tipoBillete = cli.denominacion; 

        if (tipoBillete == 10) {
            this.contBilletes10 += cantidadBilletes;
           

        }    
        else if (tipoBillete == 20) {
            this.contBilletes20 += cantidadBilletes;
        } 
        else if (tipoBillete == 50) {
            this.contBilletes50 += cantidadBilletes;
        } 
        else
        alert("la denominacion no es valida");
        
        this.contclientes++;

        if(cli.edad >= 18){
            this.contclimayor++;
        } 
    }

    
    billete10() {
        return this.contBilletes10 * 10;
    }
    billete20() {
        return this.contBilletes20 * 20;
    }
    billete50() {
        return this.contBilletes50 * 50;
    }
    montoFinal() {
        return this.billete10()+this.billete20()+this.billete50();
    }

    porcentaje50(){
        return (this.contBilletes50 - this.inicial50)/ this.inicial50 * 100;

    }
    porcentajeclimayores(){
        return (this.contclimayor / this.contclientes)*100;
    }  
}