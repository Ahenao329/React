import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./utils/Button";
import confirmar from "./utils/Confirmar";
import ListadoGenerico from "./utils/ListadoGenerico";
import { vehiculoDTO } from "./vehiculos/vehiculo.model";

export default function LandingPage(){
    const [vehiculos,setVehiculos]=useState<vehiculoDTO[]>();  
    
    useEffect(()=>{
      cargarDatos();
      
      },[])
      
      function cargarDatos(){
          axios.get('https://localhost:7148/api/vehiculos')
          .then((respuesta: AxiosResponse<vehiculoDTO[]>) =>{
          console.log(respuesta.data);
          setVehiculos(respuesta.data);
          
          })
      
      }

      async function borrar(id:number){

        try{
        
        await axios.delete('https://localhost:7148/api/vehiculos/'+id)
        cargarDatos();
        
        }
        
        catch(error){
        
            console.log(error.response.data)
        }
      }

      return(
<>
<h3>Vehículos</h3>
<ListadoGenerico listado={vehiculos}>
<table className="table table-striped">
<thead>
                        <tr>
                          <th></th>
                          <th>Foto</th>
                          <th>Placa</th>
                          <th>Marca</th>
                          <th>Nombre</th>
                          <th>Modelo</th>
                          <th>Color</th>
                          <th>Valor Alquiler por día</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vehiculos?.map(vehiculo =>
                            <tr key={vehiculo.id}>
                                <td>

                                    <Link className="btn btn-success" to={`/vehiculos/editar/${vehiculo.id}`}>
                                        Editar
                                    </Link>
                                    <Button 

                                    
                                    onClick={()=>confirmar(() =>borrar(vehiculo.id))}
                                    className="btn btn-danger">Borrar</Button>
                                </td>
                                <td>
                                <img src={vehiculo.foto} alt="Foto" />
                                </td>

                                <td>
                                    {vehiculo.placa}
                                </td>
                                <td>
                                  {vehiculo.marca}
                                </td>
                                <td>
                                  {vehiculo.nombre}
                                </td>
                                <td>
                                  {vehiculo.modelo}
                                </td>
                                <td>
                                  {vehiculo.color}
                                </td>
                                <td>
                                  {vehiculo.valorAlquiler}
                                </td>
                            </tr>)}
                    </tbody>


</table>


</ListadoGenerico>

</>

        
        )


    


}