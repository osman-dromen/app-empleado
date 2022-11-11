import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()
export class EmpleadosService{

  constructor(private servicioVentanaEmergente:ServicioEmpleadosService,private dataService:DataServices){

  }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleado=misEmpleados;
  }

    obtenerEmpleados(){
      return this.dataService.cargarEmpleados();
    }

    empleado:Empleado[]=[];

    /*empleado:Empleado[]=[
        new Empleado("Jorge","Perez","Presidente",7500),
        new Empleado("Sonia","Gallardo","Directora",5500),
        new Empleado("Maria","Hernandez","Jefa sección",3500),
        new Empleado("Laura","Sotelo","Administrativo",2500)    
      ]; */

      agregarEmpleadoServicio(empleado:Empleado){
        this.servicioVentanaEmergente.muestraMensaje("Persona que se va a agregar:"+"\n"+empleado.nombre
        +"\n"+"Salario:"+"\n"+empleado.salario);
        this.empleado.push(empleado);
        this.dataService.guardarEmpleados(this.empleado);
      }

      encontrarEmpleado(indice:number){
        let empleado:Empleado=this.empleado[indice];
        return empleado;
      }

      actualizarEmpleado(indice:number,empleado:Empleado){
        let empleadoModificado=this.empleado[indice];
        
        empleadoModificado.nombre=empleado.nombre;
        empleadoModificado.apellido=empleado.apellido;
        empleadoModificado.cargo=empleado.cargo;
        empleadoModificado.salario=empleado.salario;

        this.dataService.actualizarEmpleado(indice,empleado);
      }

      eliminarEmpleado(indice:number){
        this.empleado.splice(indice,1);
        this.dataService.eliminarEmpleado(indice);
        if(this.empleado!=null) this.dataService.guardarEmpleados(this.empleado);
      }
}