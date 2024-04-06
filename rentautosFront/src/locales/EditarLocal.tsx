import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioLocales from "./FormularioLocales";
import { localcreacionDTO, localDTO } from "./local.model";

export default function EditarLocal() {

const { id }: any = useParams();
const [local,setLocal]= useState<localDTO>();
const [errores,setErrores]= useState<string[]>([]);
const history=useHistory();

useEffect(()=>{
    axios.get('https://localhost:7148/api/locales/'+id)

    .then((respuesta: AxiosResponse<localDTO>) =>{
    
    setLocal(respuesta.data);
    
    })
    
})

async function editar(localEditar: localcreacionDTO){

try{

await axios.put('https://localhost:7148/api/locales/'+id,localEditar)
history.push('/locales');

}

catch(error){

    setErrores(error.response.data)
}



}


    return (
        <>
            <h3>Editar Local</h3>
         <MostrarErrores errores={errores}/>
            {local ? <FormularioLocales modelo={local} 
                 onSubmit={async valores => {
                    await editar(valores)
                 }}
            />:<Cargando/> }
            
        </>

    )
}



