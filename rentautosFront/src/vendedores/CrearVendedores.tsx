import FormularioVendedores from "./FormularioVendedores";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { vendedorcreacionDTO } from "./vendedor.model";

export default function CrearVendedores(){
    
    const history = useHistory();
	 
	 
	 //agrego esto Axios

    async function crear(vendedor: vendedorcreacionDTO){
        try{
            await axios.post('https://localhost:7148/api/vendedores',vendedor);
            history.push('/vendedores');
        }
        catch (error){
           console.error(error);
        }
    }

    return(
    
    <>
    <h3>Crear Vendedor</h3>
    <FormularioVendedores
    modelo={{ nombre:'', cedula:'', celular:'', direccion:'', email:'', fechaNacimiento:undefined, foto:''}}
    onSubmit={async valores => {
        await crear(valores);
     }}
    />
    </>
    
    )
    
    
    
    
}