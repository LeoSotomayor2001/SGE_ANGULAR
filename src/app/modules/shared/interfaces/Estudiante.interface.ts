import { Representante } from "../../representante/interfaces/Representante.interface";

export interface Estudiante {
    id:               number;
    name:             string;
    apellido:         string;
    cedula:           number;
    fecha_nacimiento: Date;
    image:            string;
    genero:           string;
    representante:    Representante;
}