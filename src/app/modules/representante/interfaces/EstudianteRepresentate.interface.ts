export interface EstudianteRepresentanteResponse {
    estudiantes: EstudianteRepresentante[];
}

export interface EstudianteRepresentante {
    id:               number;
    name:             string;
    apellido:         string;
    cedula:           number;
    fecha_nacimiento: Date;
    representante_id: number;
    created_at:       Date;
    updated_at:       Date;
    image:            string;
    genero:           string;
}
