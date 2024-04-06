import axios, { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { localDTO } from "./local.model";
import Button from "../utils/Button";
import ListadoGenerico from "../utils/ListadoGenerico";
import confirmar from "../utils/Confirmar";

export default function IndiceLocales(){

    const [locales,setLocales]=useState<localDTO[]>();  
    
    useEffect (() => {
      cargarDatos();
    },[])
    
  function cargarDatos(){
      axios.get('https://localhost:7148/api/locales')
      .then((respuesta: AxiosResponse<localDTO[]>) =>{
      console.log(respuesta.data);
      setLocales(respuesta.data);
      
      })
  
  }

  async function borrar(id:number){

    try{
    
    await axios.delete('https://localhost:7148/api/locales/'+id)
    cargarDatos();
    
    }
    
    catch(error){
    
        console.log(error.response.data)
    }
  }
  return(

    <>
    <h3>Locales</h3>
    <Link className="btn btn-primary" to="locales/crear">Crear Locales</Link>
    <ListadoGenerico listado={locales}>
    <table className="table table-striped">
    <thead>
                            <tr>
                                <th></th>
                                <th>Nombre</th>
                                <th>Direccion</th>
                                <th>Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locales?.map(local =>
                                <tr key={local.id}>
                                    <td>
    
                                        <Link className="btn btn-success" to={`/locales/editar/${local.id}`}>
                                            Editar
                                        </Link>
                                        <Button 
    
                                        
                                        onClick={()=>confirmar(() =>borrar(local.id))}
                                        className="btn btn-danger">Borrar</Button>
                                    </td>
    
                                    <td>
                                        {local.nombre}
                                    </td>
                                    <td>
                                      {local.direccion}
                                    </td>
                                    <td>
                                      {local.telefono}
                                    </td>
                                </tr>)}
                        </tbody>
    
    
    </table>
    
    
    </ListadoGenerico>
    
    </>
    
    )



}

   