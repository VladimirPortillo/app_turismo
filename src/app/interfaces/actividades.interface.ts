export interface Actividad {
    id_actividad: number;
    nombre:       string;
    descripcion:  string;
    direccion:    string;
    fecha_inicio: Date;
    fecha_fin:    Date;
    longitud:     null;
    latitud:      null;
    estado:       number;
    id_comunidad: null;
}
