import FormularioVehiculos from "./FormularioVehiculos";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { vehiculocreacionDTO } from "./vehiculo.model";

export default function CrearVehiculos(){

    const history = useHistory();
	 
	 
    //agrego esto Axios

   async function crear(vehiculo: vehiculocreacionDTO){
       try{
           await axios.post('https://localhost:7148/api/vehiculos',vehiculo);
           history.push('/vehiculos');
       }
       catch (error){
          console.error(error);
       }
   }

    return(
    
    <>
    <h3>Crear Vehiculo</h3>
    <FormularioVehiculos
    modelo={{ placa:'', marca: '', nombre:'', modelo:'', color:'', valorAlquiler:0, foto:'' }}
    onSubmit={async valores => {
        await crear(valores);
     }}
    />
    </>
    
    )
    
    
    
    
}