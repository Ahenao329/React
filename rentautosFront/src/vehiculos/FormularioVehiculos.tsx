import { Formik, Form, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import * as yup from "yup"
import { vehiculocreacionDTO } from "./vehiculo.model";




export default function FormularioVehiculos(props: formularioVehiculosProps){

return(

<Formik initialValues={props.modelo}


onSubmit={props.onSubmit}

validationSchema={yup.object({
placa:  yup.string().required('Este campo es obligatorio')
.placa()
,

marca:  yup.string().required('Este campo es obligatorio')
.primeraLetraMayuscula()
,

nombre:  yup.string().required('Este campo es obligatorio')
.primeraLetraMayuscula()
,

modelo:  yup.string().required('Este campo es obligatorio')
.anno(),

color:  yup.string().required('Este campo es obligatorio'),

valorAlquiler:  yup.string().required('Este campo es obligatorio')
.soloNumero(),

foto: yup.string().required('Este campo es obligatorio')

})}



>
   {(formikProps)=> (

<Form>
<FormGroupText campo="placa" label="Placa" placeholder="Placa vehiculo"/>
<FormGroupText campo="marca" label="Marca" placeholder="Marca vehiculo"/>
<FormGroupText campo="nombre" label="Nombre" placeholder="Nombre vehiculo"/>
<FormGroupText campo="modelo" label="Modelo" placeholder="Modelo vehiculo"/>
<FormGroupText campo="color" label="Color" placeholder="Color vehiculo"/>
<FormGroupText campo="valorAlquiler" label="Valor Alquiler" placeholder="Valor alquiler vehiculo"/>
<FormGroupText campo="foto" label="URL Foto" placeholder="URL Foto Vehiculo"/>


<Button disabled={formikProps.isSubmitting}type="submit">Salvar</Button>  

<Link className="btn btn-secondary" to={"/"}>Cancelar</Link>
</Form>
   )}

</Formik>  

)}

interface formularioVehiculosProps{
modelo:vehiculocreacionDTO;
onSubmit(valores:vehiculocreacionDTO,accion:FormikHelpers<vehiculocreacionDTO>):void;

}