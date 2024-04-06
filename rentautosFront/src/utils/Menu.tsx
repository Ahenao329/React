import { NavLink } from "react-router-dom";

export default function Menu(){
const claseActiva="active";

return(

<nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#acdfee",color:"A1A5A6",}} >


<div className="container-fluid"  style={{backgroundColor: "#acdfee",color:"A1A5A6", padding: "0 0 0 15px", height: "100%",
 margin: "none", border: "-30px",  zIndex: "1", fontSize:"30PX",textAlign:"center", marginBlock: "-9px", marginLeft: "-15px", marginRight: "-100%", width: "-100px", marginTop: "-5px"}}>
<NavLink className="navbar-brand"
activeClassName={claseActiva}
to="/"><h3  style={{backgroundColor: "#acdfee",color:"blue"}}>Rentautos</h3></NavLink>
<div className="collapse navbar-collapse">

    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <NavLink className="nav-link"
        activeClassName={claseActiva}
        to="/vehiculos/filtrar">
        Filtrar Vehículos
        </NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link"
        activeClassName={claseActiva}
        to="/vendedores">
        Vendedores
        </NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link"
        activeClassName={claseActiva}
        to="/locales">
        Locales
        </NavLink>
        </li>

        <li className="nav-item">
        <NavLink className="nav-link"
        activeClassName={claseActiva}
        to="/vehiculos/crear">
        Crear Vehiculo
        </NavLink>
        </li>



    </ul>
</div>
</div>
</nav>
)

}