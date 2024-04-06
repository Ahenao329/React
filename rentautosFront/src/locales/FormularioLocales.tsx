import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as yup from "yup"
import { localcreacionDTO } from "./local.model";

export default function FormularioLocales(props: formularioLocalesProps){

return(

<Formik initialValues={props.modelo}


onSubmit={props.onSubmit}

validationSchema={yup.object({
nombre:  yup.string().required('Este campo es obligatorio')
.primeraLetraMayuscula()
.max(50, 'La longitud máxima es de 50 caracteres'),

direccion:  yup.string().required('Este campo es obligatorio')
.max(50, 'La longitud máxima es de 50 caracteres'),

telefono:  yup.string().required('Este campo es obligatorio')
.soloNumero()
.max(50, 'La longitud máxima es de 50 caracteres'),


})}



>
   {(formikProps)=> (

<Form>
<FormGroupText campo="nombre" label="Nombre" placeholder="Nombre local"/>


<FormGroupText campo="direccion" label="Direccion" placeholder="Direccion local"/>
<FormGroupText campo="telefono" label="Telefono" placeholder="Telefono local"/>


<Button disabled={formikProps.isSubmitting}type="submit">Salvar</Button>  

<Link className="btn btn-secondary" to={"/locales"}>Cancelar</Link>
</Form>
   )}

</Formik>  

)}

interface formularioLocalesProps{
modelo:localcreacionDTO;
onSubmit(valores:localcreacionDTO,accion:FormikHelpers<localcreacionDTO>):void;

}