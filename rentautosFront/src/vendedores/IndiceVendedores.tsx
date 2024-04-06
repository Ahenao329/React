import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import confirmar from "../utils/Confirmar";
import ListadoGenerico from "../utils/ListadoGenerico";
import { vendedorDTO } from "./vendedor.model";

export default function IndiceVendedores(){
  const[vendedores,setVendedores]=useState<vendedorDTO[]>();
  
  useEffect(()=>{
  cargarDatos();
  
  },[])
  
  function cargarDatos(){
      axios.get('https://localhost:7148/api/vendedores')
      .then((respuesta: AxiosResponse<vendedorDTO[]>) =>{
      console.log(respuesta.data);
      setVendedores(respuesta.data);
      
      })
  
  }
  
  async function borrar(id:number){
  
      try{
      
      await axios.delete('https://localhost:7148/api/vendedores/'+id)
      cargarDatos();
      
      }
      
      catch(error){
      
          console.log(error.response.data)
      }
  }
  
  
  return(
  
  <>
  <h3>Vendedores</h3>
  <Link className="btn btn-primary" to="vendedores/crear">Crear Vendedores</Link>
  <ListadoGenerico listado={vendedores}>
  <table className="table table-striped">
  <thead>
                          <tr>
                              <th></th>
                              <th>Nombre</th>
                              <th>Cedula</th>
                              <th>Direccion</th>
                              <th>Email</th>
                              <th>Fecha de Nacimiento</th>
                              <th>Foto</th>
                          </tr>
                      </thead>
                      <tbody>
                          {vendedores?.map(vendedor =>
                              <tr key={vendedor.id}>
                                  <td>
  
                                      <Link className="btn btn-success" to={`/vendedores/editar/${vendedor.id}`}>
                                          Editar
                                      </Link>
                                      <Button 
  
                                      
                                      onClick={()=>confirmar(() =>borrar(vendedor.id))}
                                      className="btn btn-danger">Borrar</Button>
                                  </td>
  
                                  <td>
                                      {vendedor.nombre}
                                  </td>
                                  <td>
                                    {vendedor.cedula}
                                  </td>
                                  <td>
                                    {vendedor.direccion}
                                  </td>
                                  <td>
                                    {vendedor.email}
                                  </td>
                                  <td>
                                    {vendedor.fechaNacimiento}
                                  </td>
                                  <td>
                                  <img src={vendedor.foto} alt="Foto" />
                                  </td>
                              </tr>)}
                      </tbody>
  
  
  </table>
  
  
  </ListadoGenerico>
  
  </>
  
  )}

   