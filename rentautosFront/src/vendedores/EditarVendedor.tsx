import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Cargando from "../utils/Cargando";
import MostrarErrores from "../utils/MostrarErrores";
import FormularioVendedores from "./FormularioVendedores";
import { vendedorcreacionDTO, vendedorDTO } from "./vendedor.model";

export default function EditarVendedor() {

const { id }: any = useParams();
const [vendedor,setVendedor]= useState<vendedorDTO>();
const [errores,setErrores]= useState<string[]>([]);
const history=useHistory();

useEffect(()=>{
    axios.get('https://localhost:7148/api/vendedores/'+id)

    .then((respuesta: AxiosResponse<vendedorDTO>) =>{
    
    setVendedor(respuesta.data);
    
    })
})

async function editar(vendedorEditar: vendedorcreacionDTO){

try{

await axios.put('https://localhost:7148/api/vendedores/'+id,vendedorEditar)
history.push('/vendedores');

}

catch(error){

    setErrores(error.response.data)
}



}


    return (
        <>
            <h3>Editar Vendedor</h3>
         <MostrarErrores errores={errores}/>
            {vendedor ? <FormularioVendedores modelo={vendedor} 
                 onSubmit={async valores => {
                    await editar(valores)
                 }}
            />:<Cargando/> }
            
        </>

    )
}



