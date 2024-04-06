import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioVehiculos from "./FormularioVehiculos";
import { vehiculocreacionDTO, vehiculoDTO } from "./vehiculo.model";

export default function EditarVehiculo() {

const { id }: any = useParams();
const [vehiculo,setVehiculo]= useState<vehiculoDTO>();
const [errores,setErrores]= useState<string[]>([]);
const history=useHistory();

useEffect(()=>{
    axios.get('https://localhost:7148/api/vehiculos/'+id)

    .then((respuesta: AxiosResponse<vehiculoDTO>) =>{
    
    setVehiculo(respuesta.data);
    
    })
    
})

async function editar(vehiculoEditar: vehiculocreacionDTO){

try{

await axios.put('https://localhost:7148/api/vehiculos/'+id,vehiculoEditar)
history.push('/vehiculos');

}

catch(error){

    setErrores(error.response.data)
}



}


    return (
        <>
            <h3>Editar Vehículo</h3>
         <MostrarErrores errores={errores}/>
            {vehiculo ? <FormularioVehiculos modelo={vehiculo} 
                 onSubmit={async valores => {
                    await editar(valores)
                 }}
            />:<Cargando/> }
            
        </>

    )
}



