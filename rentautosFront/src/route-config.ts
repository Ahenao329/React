
import LandingPage from "./LandingPage";
import CrearVendedores from './vendedores/CrearVendedores';
import IndiceVendedores from './vendedores/IndiceVendedores';
import FiltroVehiculos from './vehiculos/FiltroVehiculos'
import RedireccionarALanding from './utils/RedireccionarALanding'
import CrearLocales from "./locales/CrearLocales";
import IndiceLocales from "./locales/IndiceLocales";
import CrearVehiculos from "./vehiculos/CrearVehiculos";
import EditarLocal from "./locales/EditarLocal";
import EditarVehiculo from "./vehiculos/EditarVehiculo";
import EditarVendedor from "./vendedores/EditarVendedor";

const rutas = [
 
    {path: '/vendedores/crear', componente: CrearVendedores},
    {path: '/vendedores', componente: IndiceVendedores, exact: true},
    {path: '/vendedores/editar/:id(\\d+)', componente: EditarVendedor},

    {path: '/locales/crear', componente: CrearLocales},
    {path: '/locales', componente: IndiceLocales, exact: true},
    {path: '/locales/editar/:id(\\d+)', componente: EditarLocal},

    {path: '/vehiculos/filtrar', componente: FiltroVehiculos}, 
    {path: '/vehiculos/crear', componente: CrearVehiculos},
    {path: '/vehiculos/editar/:id(\\d+)', componente: EditarVehiculo},   

    {path: '/', componente: LandingPage, exact: true},
    {path: '*', componente: RedireccionarALanding}
];

export default rutas;