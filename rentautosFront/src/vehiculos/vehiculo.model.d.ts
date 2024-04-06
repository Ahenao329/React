export interface vehiculocreacionDTO{
    placa:string
    marca:string;
    nombre:string;
    modelo:string;
    color:string;
    valorAlquiler:number;
    foto:string;
    
}

export interface vehiculoDTO{
    id:number;
    placa:string
    marca:string;
    nombre:string;
    modelo:string;
    color:string;
    valorAlquiler:number;
    foto:string;
    
}

export interface landingPageDTO{
Economico?:vehiculo[];
Intermedio?:vehiculo[];
Deluxe?:vehiculo[];

}