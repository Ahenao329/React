export interface localcreacionDTO{

    nombre:string;    
    direccion:string;
    telefono:string;
   
}

export interface localDTO{
    id:number;
    nombre:string;    
    direccion:string;
    telefono:string;
}

export interface indiceLocalDTO{
    Locales?:local[];
    
}
    