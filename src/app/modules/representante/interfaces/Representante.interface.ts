import { Estudiante } from "../../shared/interfaces/Estudiante.interface";

export interface RepresentanteResponse {
    data: RepresentanteResource;
}

export interface RepresentanteResource {
    id:          number;
    name:        string;
    apellido:    string;
    cedula:      number;
    email:       string;
    telefono:    string;
    ciudad:      string;
    direccion:   string;
    image:       string;
    estudiantes: Estudiante[];
}

export interface Representante {
    id:                       number;
    name:                     string;
    apellido:                 string;
    email:                    string;
    cedula:                   number;
    telefono:                 string;
    ciudad:                   string;
    direccion:                string;
    created_at:               Date;
    updated_at:               Date;
    image:                    string;
    email_verified_at:        Date;
    email_verification_token: null;
}
