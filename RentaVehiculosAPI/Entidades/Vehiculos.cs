using RentaVehiculosAPI.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace RentaVehiculosAPI.Entidades
{
    public class Vehiculos
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50)]
        public int ValorAlquiler { get; set; }

        [PrimeraLetraMayuscula]
        public string Placa { get; set; }
        public string Marca { get; set; }
        public string Nombre { get; set; }
        public string Modelo { get; set; }
        public string Color { get; set; }
        public string Foto { get; set; }



    }
}