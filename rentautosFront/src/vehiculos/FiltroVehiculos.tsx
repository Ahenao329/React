import { Field, Form, Formik } from "formik";
import Button from "../utils/Button";

export default function FiltroVehiculos() {

    const valorInicial: filtroVehiculosForm = {
        economico: false,
        intermedio: false,
        deluxe: false,
    }

    

    return (
        <>
            <h3>Filtrar Vehículos</h3>

            <Formik initialValues={valorInicial}
                onSubmit={valores => console.log(valores)}
            >
                {(formikProps) => (
                    <Form>
                        <div className="form-inline">
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="economico"
                                name="economico" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="economico">Económico</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="intermedio"
                                name="intermedio" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="intermedio">Intermedio</label>
                            </div>
                            <div className="form-group mx-sm-3 mb-2">
                                <Field className="form-check-input" id="deluxe"
                                name="deluxe" type="checkbox" />
                                <label className="form-check-label"
                                htmlFor="deluxe">Deluxe</label>
                            </div>
                            <Button
                            className="btn btn-primary mb-2 mx-sm-3"
                             onClick={() => formikProps.submitForm()}
                            >Filtrar</Button>
                            <Button
                                className="btn btn-danger mb-2"
                                onClick={() => formikProps.setValues(valorInicial)}
                            >Limpiar</Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </>

    )
}

interface filtroVehiculosForm {
    economico: boolean;
    intermedio: boolean;
    deluxe: boolean;
}