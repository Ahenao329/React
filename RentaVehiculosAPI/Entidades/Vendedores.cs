using RentaVehiculosAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RentaVehiculosAPI.Entidades
{
    public class Vendedores
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
        public string cedula { get; set; }
        public string celular { get; set; }

        public string Direccion { get; set; }

        public string email { get; set; }

        public DateTime fechaNacimiento { get; set; }

        public string foto { get; set; }





    }
}