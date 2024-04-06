import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as yup from "yup"
import { vendedorcreacionDTO } from "./vendedor.model";
import FormGroupFecha from "../utils/FormGroupFecha";



export default function FormularioVendedores(props: formularioVendedoresProps){

return(

<Formik initialValues={props.modelo}


onSubmit={props.onSubmit}

validationSchema={yup.object({
nombre:  yup.string().required('Este campo es obligatorio')
.primeraLetraMayuscula()
.max(50, 'La longitud máxima es de 50 caracteres'),

cedula:  yup.string().required('Este campo es obligatorio')
.soloNumero(),

celular:  yup.string().required('Este campo es obligatorio')
.soloNumero(),

direccion:  yup.string().required('Este campo es obligatorio'),

email:  yup.string().required('Este campo es obligatorio')
.email('No es un correo válido'),

foto: yup.string().required('Este campo es obligatorio')


})}



>
   {(formikProps)=> (

<Form>
<FormGroupText campo="nombre" label="Nombre" placeholder="Nombre vendedor"/>
<FormGroupText campo="cedula" label="Cedula" placeholder="Cedula vendedor"/>
<FormGroupText campo="celular" label="Celular" placeholder="Celular vendedor"/>
<FormGroupText campo="direccion" label="Direccion" placeholder="Direccion vendedor"/>
<FormGroupText campo="email" label="Email" placeholder="Email vendedor"/>
<FormGroupFecha campo="fechaNacimiento" label="Fecha Nacimiento"/>
<FormGroupText campo="foto" label="URL Foto" placeholder="URL Foto vendedor"/>

<Button disabled={formikProps.isSubmitting}type="submit">Salvar</Button>  

<Link className="btn btn-secondary" to={"/vendedores"}>Cancelar</Link>
</Form>
   )}

</Formik>  

)}

interface formularioVendedoresProps{
modelo:vendedorcreacionDTO;
onSubmit(valores:vendedorcreacionDTO,accion:FormikHelpers<vendedorcreacionDTO>):void;

}