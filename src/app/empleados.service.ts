import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService){

  }
    empleado:Empleado[]=[
        new Empleado("Jorge","Perez","Presidente",7500),
        new Empleado("Sonia","Gallardo","Directora",5500),
        new Empleado("Maria","Hernandez","Jefa sección",3500),
        new Empleado("Laura","Sotelo","Administrativo",2500)    
      ]; 

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:"+"\n"+empleado.nombre
        +"\n"+"Salario:"+"\n"+empleado.salario);
        this.empleado.push(empleado);
      }
}