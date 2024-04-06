import FormularioLocales from "./FormularioLocales";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { localcreacionDTO } from "./local.model";

export default function CrearLocales(){

    const history = useHistory();
    
    async function crear(local: localcreacionDTO){
        try{
            await axios.post('https://localhost:7148/api/locales',local);
            history.push('/locales');
        }
        catch (error){
           console.error(error);
        }
    }
    
    return(
    
    <>
    <h3>Crear Local</h3>
    <FormularioLocales
    modelo={{ nombre:'', direccion:'', telefono:''}}
    onSubmit={async valores => {
        await crear(valores);
     }}
    />
    </>
    
    )
    
    
    
    
    }